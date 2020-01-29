FROM  envoyproxy/envoy:v1.12.2
WORKDIR /HEW2020/proxy
COPY ./envoy.yaml .
CMD /usr/local/bin/envoy -c /HEW2020/proxy/envoy.yaml
EXPOSE 8080