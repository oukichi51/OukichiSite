# ベースイメージとして公式のNginxイメージを使用
FROM nginx:alpine

# 作業ディレクトリを設定
WORKDIR /usr/share/nginx/html

# ローカルのプロジェクトファイルをコンテナ内にコピー
COPY ./docs /usr/share/nginx/html

# Nginxのデフォルト設定を使用
EXPOSE 80

# コンテナ起動時にNginxを実行
CMD ["nginx", "-g", "daemon off;"]
