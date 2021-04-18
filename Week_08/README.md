# 浏览器工作原理
## url渲染页面过程
- url （ http 下载文件
- html（ parse 文本分析 编译
- dom（ css computing 样式计算
- dom with css（ layout
- dom with position（ 通过css生成的核计算位置
- BitMap
## 有限状态机
### 状态机：所有机器接受的输入一致 机器本身没状态
- Moore 状态机（每个机器都有确定的下一状态
- Mealy 状态机（根据输入决定下一状态
- 寻找字符串内的ab
    ```
        function match(string){
            let posT = false
            for(let c of string){
                if(c === 'a'){
                    posT=true
                }else if(posT===true && c==='b'){
                    return true
                }else{
                    posT=false
                }
            }
            return false
        }
        console.log(match("i amb groot"))
    ```