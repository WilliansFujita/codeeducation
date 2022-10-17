from golang as builder

WORKDIR /usr/src/app
COPY ./ola.go .
RUN go build ola.go

from scratch
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/ola .
CMD ["./ola"]