ARG NODE_VERSION=25

FROM node:${NODE_VERSION}-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:${NODE_VERSION}-alpine AS runner

ENV NODE_ENV=production
ENV PORT=3000

USER node

WORKDIR /app
COPY --from=builder --chown=node:node /app .

EXPOSE 3000

CMD ["npm", "run", "start"]


# # ---------- DEV IMAGE ----------
# FROM node:25-alpine

# # Required by some native deps
# RUN apk add --no-cache libc6-compat

# WORKDIR /app

# # Install deps first (better caching)
# COPY package.json package-lock.json ./
# RUN npm install --legacy-peer-deps

# # Copy source code
# COPY . .

# # Environment for development
# ENV NODE_ENV=development
# ENV PORT=3000

# EXPOSE 3000

# # Run Next.js + Payload in dev mode
# CMD ["npm", "run", "dev"]
