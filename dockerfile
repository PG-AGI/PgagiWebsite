FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_DISABLE_FONT_OPTIMIZATION=1

RUN echo "0.0.0.0 fonts.gstatic.com" >> /etc/hosts && npm run build

EXPOSE 3000

CMD ["npm", "start"]