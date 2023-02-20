FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g typescript
RUN npx prisma generate
RUN pwd
CMD ["tsc"]
CMD ["npx prisma migrate dev"]
CMD ["node", "dist/server.js"]
ENV DATABASE_URL="postgresql://postgres:123456@ineurondb:5432/ineuron?schema=public"
EXPOSE 3030