<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <!--Introduce initialization css file-->
    <link rel="stylesheet" href="../css/normalize.css">
    <!--basic style for header and bottom-->
    <link rel="stylesheet" href="../css/base.css">

    <link rel="stylesheet" href="../css/index.css">

</head>
<body>
<div class="center">
    <div class="menu ">
        <div class="menu ">
            <div class="setting">
                <div id="homepage" class="border_default" ><a href="index.php"></a></div>
                <div id="logout" class="border_default" ><a href="../page/Login.html">logout</a></div>
            </div>
            <ul>
                <!--task.html-->
                <li id="Task"><a>MyTask</a></li>
                <!--timetable.html-->
                <li id="TimeTable"><a>TimeTable</a></li>
                <!--GroupInfo.html-->
                <li id="GroupInfo"><a>Group Info</a></li>
            </ul>
        </div>
    </div>


    <div id="task_large">
            <ul>
                <!--just do a example,need to create dynamically-->
                <!--two li as a group-->
                <li id="title" class="task_title border_default"><a>Task1</a></li>
                <li id="detail" class="task_detail border_default"><div>------------------------------------
                --------------------------------------------------------------
                --------------------------------------------------------------
                --------------------------------------------------------------
                --------------------------------------------------------------
                --------------------------------------------------------------</div></li>
                <li><a href=""></a></li>
                <li></li>

                <!--last li:add-->
                <li id="add"><a href="">+</a></li>
            </ul>
    </div>


    <div id="task_small">
        <ul>
            <li><a >task1</a></li>
            <li><a >task2</a></li>
        </ul>
    </div>
    <div id="task_info">
        <!--here show the info for the task,get from database-->
        <h1>Task1</h1>
        testtesttesttesttesttesttesttesttest
        testtesttesttesttesttesttesttesttesttesttest
        testtesttesttesttesttesttesttesttesttest
        testtesttesttesttesttesttesttest
        testtesttesttesttesttesttesttest

    </div>
    <script >

    </script>

    <div id="timeDiv">
        create time table here
    </div>
    <div id="detailDiv">
        <div>
            <!--maybe use a textarea-->
            <!--<textarea name="" id="" cols="30" rows="10"></textarea>-->
            add description
        </div>
        <div>
            <input id="editButton" type="submit" value="Edit" >
        </div>
    </div>


    <div id="GroupInfoDiv" class="border_default">
        <div class="InfoHeader">
            <div class="avatar">
                <img id="avatarImg" src="" alt="">
            </div>
            <div>
                <h3> my group is photo</h3>
            </div>
        </div>

        <div id="GroupDetail">
            add detail here
        </div>
    </div>

</div>
<script src="../js/index_backup.js"></script>
</body>
</html>
