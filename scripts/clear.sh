#!/bin/sh
set -e

echo '💪 正在清除所有包'
# rm -rf node_modules
# cd packages
# rm -rf */node_modules
# 递归删除下工程内的所有node_modules
find . -name "node_modules" -type d -exec rm -rf '{}' +
# 命令拆解注释
# . 当前目录
# -name 名字匹配，指定字符串作为寻找文件或目录的范本样式；
# -type 查询文件类型。 -d 就是目录
# -exec 就是匹配后执行一些命令
# rm -rf '{}' 删除匹配到到('{}')
# + 是个骚操作
# 一个-exec只能执行一个命令，而且必须在命令后面加上终结符，终结符有两个：“；”和“+”。
# 其中";" 会对每一个find到的文件去执行一次cmd命令。而”+“让find到的文件一次性执行完cmd命令。
echo "✅ 清除所有包完成!"
echo '🌈 正在重新安装依赖包'
enpm i
echo '✅ 安装完成!'


