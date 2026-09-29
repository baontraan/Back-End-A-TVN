create database btvn;

use btvn;

-- BT 1

create table Employees (
	employee_id int auto_increment primary key,
    name varchar(100) not null,
    age int not null,
    department varchar(50) not null,
    salary decimal(10,2) not null
);

--  Cách 1
insert into Employees (name, age, department, salary) values
("Trần Văn A", 40, "IT", 35570000),
("Nguyễn Thị B", 35, "Marketing", 30000000),
("Đinh Hoàng C", 24, "IT", 14500000),
("Ngô Văn Tí", 29, "IT", 19800000),
("Huỳnh Thị Tèo", 30, "Marketing", 20000000);

-- Cách 2

delimiter //

create procedure sp_addNewEmployee(in p_name varchar(100), in p_age int, in p_department varchar(50), in p_salary decimal(10, 2))
begin
	insert into Employees(name, age, department, salary) values (p_name, p_age, p_department, p_salary);
end //

delimiter ;

call sp_addNewEmployee("Lý Lệ Dương", 33, "Kinh doanh", 13000000);
call sp_addNewEmployee("Lý Mạc Sầu", 43, "Kinh doanh", 18000000);
call sp_addNewEmployee("Phạm Hải Đăng", 28, "IT", 15000000.00);
call sp_addNewEmployee("Hoàng Thu Trang", 25, "Marketing", 10000000.00);
call sp_addNewEmployee("Vũ Minh Triết", 30, "Kinh doanh", 12500000.00);

select *
from Employees;

select *
from Employees as e
where e.department = "IT";

delimiter //

create procedure sp_getEmployeeByDepartment(in p_department varchar(50))
begin
	select *
    from Employees as e
    where e.department = p_department;
end //

delimiter ;

call sp_getEmployeeByDepartment("Kinh Doanh");
call sp_getEmployeeByDepartment("IT");
call sp_getEmployeeByDepartment("Marketing");

update Employees set salary = 8500000 where employee_id = 2;

select * 
from Employees;

delimiter //

create procedure sp_updateEmployeeSalaryById(in p_id int, in p_salary decimal(10, 2))
begin
	update Employees as e
    set e.salary = p_salary
    where e.employee_id = p_id;
end //

delimiter 

call sp_updateEmployeeSalaryById(2, 8500000);

select *
from Employees;

delete from Employees
where employee_id = 4;

delimiter //

create procedure sp_deleteEmployeeById(in p_id int)
begin
	delete from Employees as e
    where e.employee_id = p_id;
end //

delimiter ;

call sp_deleteEmployeeById(5);

-- BT 2

create table Sales(
	sale_id int auto_increment primary key,
    employee_id int,
    sale_amount decimal(10, 2),
    sale_date date,
    foreign key(employee_id) references Employees(employee_id)
)

select *
from sales;

delimiter //

create procedure sp_addNewSale(in p_employee_id int, in p_sale_amount decimal(10, 2), in p_sale_date date)
begin
	insert into Sales(employee_id, sale_amount, sale_date) values (p_employee_id, p_sale_amount, p_sale_date);
end //

delimiter ;

CALL sp_addNewSale(1, 15000000.00, '2026-09-01');

CALL sp_addNewSale(2, 8500000.00, '2026-09-05');

CALL sp_addNewSale(3, 12000000.00, '2026-09-10');

CALL sp_addNewSale(6, 25000000.00, '2026-09-15');

CALL sp_addNewSale(7, 18500000.00, '2026-09-20');

select sum(sale_amount) as "Tổng Doanh Thu"
from sales;

select avg(s.sale_amount) as "Doanh Thu Trung Bình"
from Employees as e
join Sales as s
on e.employee_id = s.employee_id
where e.department = "Kinh doanh";

select e.employee_id, e.name, e.department
from Employees as e
left join Sales as s
on s.employee_id = e.employee_id
where s.sale_id is null;

-- BT 3 

create table Projects (
    project_id int auto_increment primary key,
    project_name varchar(100) not null,
    department varchar(50)
);

create table Assignments (
    assignment_id int auto_increment primary key,
    employee_id int not null,
    project_id int not null,
    foreign key (employee_id) references Employees(employee_id),
    foreign key (project_id) references Projects(project_id)
);


delimiter //

create procedure sp_addNewProject(in p_project_name varchar(100), in p_department varchar(50))
begin
    insert into Projects(project_name, department) values (p_project_name, p_department);
end //

delimiter ;

delimiter //

create procedure sp_addNewAssignment(in p_employee_id int, in p_project_id int)
begin
    insert into assignments(employee_id, project_id) values (p_employee_id, p_project_id);
end //

delimiter ;

call sp_addNewProject("Hệ Thống CRM", "IT");
call sp_addNewProject("Chiến Dịch Mùa Thu", "Marketing");
call sp_addNewProject("Mở Rộng Thị Trường", "Kinh doanh");

call sp_addNewAssignment(1, 1); 
call sp_addNewAssignment(3, 1); 
call sp_addNewAssignment(2, 2);
call sp_addNewAssignment(6, 3);
call sp_addNewAssignment(7, 3);

select *
from Projects;

select *
from Assignments;

select e.employee_id, e.name, e.department, p.project_id, p.project_name, p.department
from Assignments as a
join Employees as e
on a.employee_id = e.employee_id
join Projects as p
on p.project_id = a.project_id;

select 
    e.employee_id, 
    e.name, 
    e.department, 
    e.salary
from Employees as e
left join Assignments as a on e.employee_id = a.employee_id
where a.assignment_id is null;

select 
    p.project_id,
    p.project_name,
    p.department,
    count(a.employee_id) as total_employees
from Projects as p
join Assignments as a on p.project_id = a.project_id
group by p.project_id, p.project_name, p.department;

-- BT 4

select employee_id, name, department, salary
from Employees
where salary = (select max(salary) from Employees);

call sp_addNewEmployee("Nguyễn Văn Hùng", 28, "HR", 12000000);
call sp_addNewEmployee("Lê Thị Mai", 34, "HR", 16500000);
call sp_addNewEmployee("Trần Hoàng Bách", 26, "HR", 10500000);
call sp_addNewEmployee("Phạm Thanh Thủy", 31, "HR", 15000000);	

select *
from Employees
where department = "HR"
order by age desc;

select *
from Employees
where salary between 5000000 and 10000000;

select *
from Sales;

select 
    sale_id,
    employee_id,
    sale_amount,
    sale_date
from Sales
order by sale_amount desc
limit 3;

select 
    sale_id,
    employee_id,
    sale_amount,
    sale_date
from Sales
where month(sale_date) = month(now()) 
  and year(sale_date) = year(now());







