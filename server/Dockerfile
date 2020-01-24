FROM golang:1.12

ENV GO111MODULE=on

WORKDIR /go/src/HEW2020/server
COPY . .
RUN go get github.com/pilu/fresh
CMD ["fresh"]
EXPOSE 49200 49201