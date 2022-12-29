// cte.js
// start engine!
// activate all functions!!

start();

function start() {
    $lang = document.getElementById('code-containers');
    $langs = ["HTML", "CSS", "JS"];
    $tbox = document.getElementsByClassName('codebox');
    $layout = document.querySelector('[data-role="frontend"]');
    $CodeArea = document.querySelector('[data-role="backend"]');

    $style = document.getElementById('myStyle');
    $script = document.querySelector('[role="showError"]');
    $r_code = document.querySelector('[role="test-code"]');
    $c_code = document.querySelector('[role="empty_boxes"]');
    $h_code = document.querySelector('[role="hide_backend"]');
    
    $layout.ondblclick = () => open();
    $lang.onchange = () => code_lang();
    $r_code.onclick = () => run();
    $c_code.onclick = () => clear();
    $h_code.onclick = () => close();
    $tbox[0].placeholder = "HTML Goes Here...";
    $tbox[1].placeholder = "CSS Goes Here...";
    $tbox[2].placeholder = "JS Goes Here...";
    $script.style.color = "#ff0000";
    $script.style.background = "#ffffff";
    
    function code_lang() {
        for (i = 0; i < $tbox.length; i++) {
            $tbox[i].style.display = "none"
        }

        document.getElementById($lang.value).style.display = "block"
    }

    function run() {
        $layout.innerHTML = $tbox[0].value;
        $style.innerHTML = $tbox[1].value;
        $script.innerHTML = "";
        close();

        try {
            eval($tbox[2].value)
        }

        catch (err) {
            $script.innerHTML = "*&nbsp;"+err+"&nbsp;*"
        }
    }

    function open() {
        $CodeArea.style.width = "100%";
    }

    function clear() {
        $tbox[$langs.indexOf($lang.value, 0)].value = ""
    }

    function close() {
        $CodeArea.style.width = "0";
    }
}