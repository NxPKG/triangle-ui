# syntax=docker/dockerfile:1.2

# Copyright 2021 Authors of Khulnasoft
# SPDX-License-Identifier: Apache-2.0

# BUILDPLATFORM is an automatic platform ARG enabled by Docker BuildKit.
# Represents the plataform where the build is happening, do not mix with
# TARGETARCH
FROM --platform=${BUILDPLATFORM} docker.io/library/node:18-alpine3.18@sha256:a315556d82ef54561e54fca7d8ee333382de183d4e56841dcefcd05b55310f46 as stage1
RUN apk add bash
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY scripts/ scripts/
COPY patches/ patches/

# TARGETOS is an automatic platform ARG enabled by Docker BuildKit.
ARG TARGETOS
# TARGETARCH is an automatic platform ARG enabled by Docker BuildKit.
ARG TARGETARCH
RUN npm --target_arch=${TARGETARCH} install

COPY . .

ARG NODE_ENV=production
RUN npm run build

FROM docker.io/nginxinc/nginx-unprivileged:1.25-alpine3.18@sha256:30dce5d5e7a0afdf3dd49aad291d625cbdb4cf2d3f01d926772943e069054ca1
COPY --from=stage1 /app/server/public /app