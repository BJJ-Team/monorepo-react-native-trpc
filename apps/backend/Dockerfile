FROM node:22-alpine

WORKDIR app

COPY ./dist ./dist
COPY ./package.json ./_package.json
COPY ./prisma/schema.prisma ./prisma/schema.prisma
COPY ./prisma/migrations ./prisma/migrations

RUN cat _package.json | grep -v workspace > package.json
RUN rm _package.json
RUN npm i --omit=dev --no-package-lock

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]
