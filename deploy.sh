#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# 配置目录差异化导致的图片显示问题，复制  /notes   到 /.vuepress/public 目录
cp docs/notes/ docs/.vuepress/public/ -rf

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f "https://${GH_TOKEN}@github.com/frank-lam/fullstack-tutorial-site.git" master:gh-pages

cd -