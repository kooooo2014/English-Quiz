<template>
    <div class="header">
        Header
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
.navbar {
    padding: 13px 90px;
    width: 100%;
    position: fixed;
    z-index: 10;
    box-shadow: 0px 6px 26px rgba(0, 0, 0, 0.16);
    background: #fff;
}

a, .nav-link{
    font-family: 'Alef';
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #2f2f2f;
}    
a:hover, .nav-link:hover { 
    color: #aeaeae;
    text-decoration: none;
}


#navbarNav {
    flex-direction: row-reverse;
}

.nav-item {
    margin-left: 90px;
}

.blue-button {
    display: inline-block;
    margin: auto;
    height: 70px;
    width: 280px;
    border-radius: 20px;
    background: #97C3FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Alef';
    font-size: 24px;
    line-height: 70px;
    color: #fff;
    text-align: center;
}
.blue-button:hover {
    background: #71acff;
    color: #fff;
}

</style>