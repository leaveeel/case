var select = {}
window.onload=function(){
    document.getElementById(select.dom).innerHTML = '<div id="select_shadow"></div><span id="select_main"><p id="select_default">请选择</p><p id="select_write"></p><div id="select_list"><input id="select_search" /><ul id="select_option"></ul></div></span></div>';
    var simSelect = {
        list: document.getElementById('select_list'),
        shadow: document.getElementById('select_shadow'),
        input: document.getElementById('select_search'),
        sdefault: document.getElementById('select_default'),
        write: document.getElementById('select_write'),
        option: document.getElementById('select_option'),
        // li: [ ],
        initial: function () {
            select.getDate();
            setTimeout(function () {
                simSelect.option.innerHTML = select.list;
                for(var i = 0; i < document.getElementsByTagName('p').length; i++) {
                    document.getElementsByTagName('p')[i].onclick = simSelect.pClick;
                }
                for(var i = 0; i < simSelect.list.getElementsByTagName('li').length; i++) {
                    simSelect.list.getElementsByTagName('li')[i].onclick = simSelect.liClick;
                }
                simSelect.shadow.onclick = simSelect.selectHide;
                simSelect.input.oninput = simSelect.OnInput;
                simSelect.input.onpropertychange = simSelect.OnInput;
            }, 10);
            /*
            var xmlhttp = new XMLHttpRequest();
            if (xmlhttp != null) {
                xmlhttp.open("GET", "simSelect", true);
                xmlhttp.send(null);
                xmlhttp.onreadystatechange = function(){
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200) {
                            simSelect.li = Function('return (' + xmlhttp.responseText + ')')()["list"];
                            var html = simSelect.option.innerHTML;
                            for (var i = 0; i < simSelect.li.length; i++) {
                                html = html + '<li value="' + simSelect.li[i].val + '">' + simSelect.li[i].tex + '</li>'
                            }
                            simSelect.option.innerHTML = html;
                            for(var i = 0; i < document.getElementsByTagName('p').length; i++) {
                                document.getElementsByTagName('p')[i].onclick = simSelect.pClick;
                            }
                            for(var i = 0; i < simSelect.list.getElementsByTagName('li').length; i++) {
                                simSelect.list.getElementsByTagName('li')[i].onclick = simSelect.liClick;
                            }
                            simSelect.shadow.onclick = simSelect.selectHide;
                            simSelect.input.oninput = simSelect.OnInput;
                            simSelect.input.onpropertychange = simSelect.OnInput;
                        }else {
                            alert("Problem retrieving XML data");
                        }
                    }
                };
            }
            */
        },
        selectHide: function () {
            simSelect.option.scrollTop = 0;
            simSelect.shadow.style.display = 'none';
            simSelect.list.style.display = 'none';
            simSelect.input.value = '';
            for(var i = 0; i < simSelect.list.getElementsByTagName('li').length; i++) {
                simSelect.list.getElementsByTagName('li')[i].style.display = 'block';
            }
        },
        pClick: function () {
            if(simSelect.list.style.display === 'none' || simSelect.list.style.display === '') {
                simSelect.list.style.display = 'block';
                simSelect.shadow.style.display = 'block';
            }else {
                simSelect.selectHide();
            }
        },
        liClick: function () {
            var text = this.innerHTML;
            simSelect.write.innerHTML = text;
            simSelect.sdefault.style.display = 'none';
            simSelect.selectHide();
        },
        OnInput: function () {
            var sval = simSelect.input.value;
            for(var i = 0; i < simSelect.list.getElementsByTagName('li').length; i++) {
                if(sval != '') {
                    if(simSelect.list.getElementsByTagName('li')[i].innerHTML.indexOf(sval) != -1) {
                        simSelect.list.getElementsByTagName('li')[i].style.display = 'block';
                    }else {
                        simSelect.list.getElementsByTagName('li')[i].style.display = 'none';
                    }
                }else {
                    simSelect.list.getElementsByTagName('li')[i].style.display = 'block';
                }
            }
        }
    }
    simSelect.initial();
}
