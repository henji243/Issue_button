try {
    let url = location.href

    if (url.indexOf("https://github.com") == -1 || url.indexOf("/issues/") == -1) {
        alert("GitHubのissueのページで実行してネ!")
    }else {
        document.getElementsByClassName("ajax-pagination-btn no-underline pb-1 pt-0 px-4 mt-0 mb-1 color-bg-default border-0")[0].click();
    }
} catch(e) {
    alert("ボタンがないヨ!ゴメンネ!")
}
