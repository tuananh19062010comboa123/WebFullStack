document.getElementById("content").addEventListener("input", function() {
    document.getElementById("count").innerText = 200 - document.getElementById("content").value.length;
    var check = 200 - document.getElementById("content").value.length;
});
