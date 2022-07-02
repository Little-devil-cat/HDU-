var first_keywords = {};
            //定义收入支出对应的下拉框
            first_keywords['收入'] = ['工资', '奖金', '其他收入'];
            first_keywords['支出'] = ['食物', '衣物', '游玩', '游戏', '家具', '日常用品', '其他支出'];
            function Change_select() {
            //根据id找到两个下拉框对象
                var target1 = document.getElementById("select1");
                var target2 = document.getElementById("select5");
                //得到第一个下拉框的内容
                var selected_select1 = target1.options[target1.selectedIndex].value;
                //清空第二个下拉框
                while (target2.options.length) {
                    target2.remove(0);
                }
                //根据第一个下拉框的内容找到对应的列表
                var select1_list = first_keywords[selected_select1];
                if (select1_list) {
                    for (var i = 0; i < select1_list.length; i++) {
                        var item = new Option(select1_list[i], i);
                        //将列表中的内容加入到第二个下拉框
                        target2.options.add(item);
                    }
                }
            } 