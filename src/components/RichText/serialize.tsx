/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react-dom/no-dangerously-set-innerhtml */
/* eslint-disable react/no-array-index-key */

import type { SerializedListItemNode, SerializedListNode } from '@lexical/list';
import type { SerializedHeadingNode } from '@lexical/rich-text';
import type { LinkFields, SerializedLinkNode } from '@payloadcms/richtext-lexical';
import type { SerializedElementNode, SerializedLexicalNode, SerializedTextNode } from 'lexical';

import { cn } from '@/lib/utils';

import escapeHTML from 'escape-html';
import Link from 'next/link';

import React, { type JSX } from 'react';
import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat';

type Props = {
  nodes: SerializedLexicalNode[];
};

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <>
      {nodes?.map((_node, index): JSX.Element | null => {
        if (_node.type === 'text') {
          const node = _node as SerializedTextNode;
          let text = (
            <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} key={index} />
          );
          if (node.format & IS_BOLD) {
            text = <strong className="font-bold" key={index}>{text}</strong>;
          }
          if (node.format & IS_ITALIC) {
            text = <em className="italic" key={index}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} className="line-through">
                {text}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} className="underline">
                {text}
              </span>
            );
          }
          if (node.format & IS_CODE) {
            text = <code key={index} className="bg-gray-200 p-1 rounded">{text}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>;
          }

          return text;
        }

        if (_node == null) {
          return null;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: SerializedElementNode): JSX.Element | null => {
          if (node.children == null) {
            return null;
          } else {
            if (node?.type === 'list' && (node as SerializedListNode)?.listType === 'check') {
              for (const item of node.children) {
                if ('checked' in item) {
                  if (!item?.checked) {
                    item.checked = false;
                  }
                }
              }
              return serializeLexical({ nodes: node.children });
            } else {
              return serializeLexical({ nodes: node.children });
            }
          }
        };

        const serializedChildren
          = 'children' in _node ? serializedChildrenFn(_node as SerializedElementNode) : '';

        switch (_node.type) {
          case 'linebreak': {
            return <br key={index} />;
          }
          case 'paragraph': {
            return <p key={index} className="mb-4 text-gray-800">{serializedChildren}</p>;
          }
          case 'heading': {
            const node = _node as SerializedHeadingNode;

            type Heading = Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'>;
            const Tag = node?.tag as Heading;
            return <Tag key={index} className={cn(node?.tag === 'h1' && 'text-3xl font-semibold mb-4', node?.tag === 'h2' && 'text-2xl font-semibold mb-4', node?.tag === 'h3' && 'text-xl font-semibold mb-4', node?.tag === 'h4' && 'text-lg font-semibold mb-4', node?.tag === 'h5' && 'text-base font-semibold mb-4')}>{serializedChildren}</Tag>;
          }
          case 'label':
            return <span key={index} className="font-semibold">{serializedChildren}</span>;

          case 'largeBody': {
            return <p key={index} className="text-xl text-gray-600">{serializedChildren}</p>;
          }
          case 'list': {
            const node = _node as SerializedListNode;

            type List = Extract<keyof JSX.IntrinsicElements, 'ol' | 'ul'>;
            const Tag = node?.tag as List;
            return (
              <Tag className="list-inside list-disc pl-5 mb-4" key={index}>
                {serializedChildren}
              </Tag>
            );
          }
          case 'listitem': {
            const node = _node as SerializedListItemNode;

            if (node?.checked != null) {
              return (
                <li
                  aria-checked={node.checked ? 'true' : 'false'}
                  className={`flex items-center space-x-2 ${node.checked ? 'text-green-500' : 'text-red-500'}`}
                  key={index}
                  role="checkbox"
                  tabIndex={-1}
                  value={node?.value}
                >
                  {serializedChildren}
                </li>
              );
            } else {
              return (
                <li className="mb-2" key={index} value={node?.value}>
                  {serializedChildren}
                </li>
              );
            }
          }
          case 'quote': {
            return <blockquote key={index} className="italic border-l-4 pl-4 text-gray-700">{serializedChildren}</blockquote>;
          }
          case 'link': {
            const node = _node as SerializedLinkNode;

            const fields: LinkFields = node.fields;

            if (fields.linkType === 'custom') {
              return (
                <Link
                  href={escapeHTML(fields.url)}
                  key={index}
                  className="text-blue-500 hover:underline"
                  {...(fields?.newTab
                    ? {
                        rel: 'noopener noreferrer',
                        target: '_blank',
                      }
                    : {})}
                >
                  {serializedChildren}
                </Link>
              );
            } else {
              return <span key={index}>Internal link coming soon</span>;
            }
          }

          default:
            return null;
        }
      })}
    </>
  );
}
