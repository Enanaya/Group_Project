<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <!--Introduce initialization css file-->
    <link rel="stylesheet" href="../../css/normalize.css">
    <link rel="stylesheet" href="../../css/Admin/leader.css">
</head>
<body>
    <div class="container">
        <table id="MainTable" border="1">
            <caption>Project1 <a href="project.php"><button>edit</button></a></caption>
            <thead>
            <tr >
                <th>MemberID <a href="add.php"><button>+</button></a></th>
                <th>Name </th>
                <th >Status </th>
                <th >Operation </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>data</td>
                <td>data</td>
                <td>status</td>
                <td><a href="MemberEdit.php"><button>edit</button></a></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td>LeaderName</td>
                <td>"LeaderName"</td>
                <td></td>
                <td><a href="../Login.html"><button>logout</button></a></td>
            </tr>
            </tfoot>
        </table>

    </div>
</body>
</html>