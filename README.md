"# pclub-task5" 

I have used nodejs in the implementation of the task(which also requires knowledge of mysql)

Firstly I created the database file "mydb" in mysql.

var con = mysql.createConnection(...) creates connection with the database.

var sql = "CREATE TABLE stu (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(25),roll_no INT, branch VARCHAR(25),userid VARCHAR(25))"; 
 // creates table with coulumn headings as id(primary key),name,roll_no,branch,userid
  
 var sql = "INSERT INTO stu (name,roll_no,branch,userid) VALUES ?";// adds values in the table
 
 ![image](https://user-images.githubusercontent.com/96648258/184618601-e48110b0-5e64-4fef-9918-51be696fcfaa.png)![image](https://user-images.githubusercontent.com/96648258/184618832-cbcdf608-dfa8-480b-97ec-5e38008e01b4.png)

Now the user is suppose to enter 1 to add value,2 to delete,3 to filter,4 to update.

![image](https://user-images.githubusercontent.com/96648258/184619075-64d79998-7ddf-48eb-8ea0-9a4a809072c4.png)
![image](https://user-images.githubusercontent.com/96648258/184619302-8af68272-4905-4a05-80e1-4232b4e12bb4.png)
![image](https://user-images.githubusercontent.com/96648258/184619497-653a899c-4ccb-4702-89a6-cb01eda631a0.png)
![image](https://user-images.githubusercontent.com/96648258/184619536-65c4f353-9b8e-4280-9794-133915d3f55b.png)
![image](https://user-images.githubusercontent.com/96648258/184619616-63b1d6b2-401c-4a2e-9c70-4465cede2026.png)
![image](https://user-images.githubusercontent.com/96648258/184619677-21706f27-31f1-4c31-a4c1-0b706f923e1e.png)
![image](https://user-images.githubusercontent.com/96648258/184619726-43dbaaf7-ca8b-4677-8aa0-15b2a3618cb7.png)

Hence the reqd task is achieved.




