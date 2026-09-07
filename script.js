const weeks = [

  // =========================================================
  // WEEK 1
  // =========================================================
  {
    id: 1,
    title: "Week 01",
    subtitle: "Comparative Study of Programming Languages",
    programs: [
      {
        title: "Comparative Table — Java, C, C++, Python & JavaScript",
        description:
          "Comparative study of Java, C, C++, Python and JavaScript based on language type, OOP support, memory management, performance, platform independence, IDEs, applications, advantages and limitations.",
        code: `Java
C
C++
Python
JavaScript

Parameters covered:
1. Language / Package Name
2. Open Source or Commercial
3. Compiler or Interpreter
4. OOP Support
5. Developer Organization
6. Developer
7. Current Major Version
8. Primary Purpose
9. Common Applications
10. Database Support
11. Memory Management
12. Security Features
13. Performance
14. Platform Independence
15. Other Important Features
16. Ease of Learning
17. Popular IDEs
18. Compilation Output
19. Advantages
20. Limitations`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 2
  // =========================================================
  {
    id: 2,
    title: "Week 02",
    subtitle: "Installation of Java and Hello World",
    programs: [
      {
        title: "Oracle JDK Installation — Windows",
        description:
          "Installation of Java using Oracle JDK on Windows, configuring JAVA_HOME and PATH, verifying the Java version and executing a simple Hello World program.",
        code: `// Hello World Program

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        output: null
      },

      {
        title: "OpenJDK Installation — Windows",
        description:
          "Installation of Java using OpenJDK on Windows, running the MSI installer, checking the Java version and executing a Java program using PowerShell.",
        code: `// Hello World Program using OpenJDK

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 3
  // =========================================================
  {
    id: 3,
    title: "Week 03",
    subtitle:
      "Basic Java Concepts, Data Types, Variables, Type Conversion, Type Casting and Control Statements",

    programs: [

      {
        title: "Hello Java",
        description:
          'Write a Java program to display "Hello, Java!" and demonstrate the basic structure of a Java program.',
        code: `class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
        output: null
      },

      {
        title: "Primitive Data Types",
        description:
          "Declare variables of byte, short, int, long, float, double, char and boolean data types and display their values.",
        code: `class PrimitiveDataTypes {
    public static void main(String[] args) {

        byte BV = 100;
        short SV = 20000;
        int IV = 500000;
        long LV = 9876543210L;
        float FV = 12.5f;
        double DV = 123.456789;
        char CV = 'A';
        boolean BOLV = true;

        System.out.println("Byte Value : " + BV);
        System.out.println("Short Value : " + SV);
        System.out.println("Int Value : " + IV);
        System.out.println("Long Value : " + LV);
        System.out.println("Float Value : " + FV);
        System.out.println("Double Value : " + DV);
        System.out.println("Char Value : " + CV);
        System.out.println("Boolean Value : " + BOLV);
    }
}`,
        output: null
      },

      {
        title: "Arithmetic Operations on Integers",
        description:
          "Perform addition, subtraction, multiplication, division and modulus operations on two integer variables.",
        code: `class ArithmeticOperations {
    public static void main(String[] args) {

        int a = 20;
        int b = 6;

        int addition = a + b;
        int subtraction = a - b;
        int multiplication = a * b;
        int division = a / b;
        int modulus = a % b;

        System.out.println("First Number : " + a);
        System.out.println("Second Number : " + b);
        System.out.println("Addition : " + addition);
        System.out.println("Subtraction : " + subtraction);
        System.out.println("Multiplication : " + multiplication);
        System.out.println("Division : " + division);
        System.out.println("Modulus : " + modulus);
    }
}`,
        output: null
      },

      {
        title: "Floating Point Arithmetic",
        description:
          "Perform arithmetic operations on floating-point numbers and display the results.",
        code: `class FloatingPointArithmetic {
    public static void main(String[] args) {

        float a = 15.5f;
        float b = 4.5f;

        float addition = a + b;
        float subtraction = a - b;
        float multiplication = a * b;
        float division = a / b;
        float modulus = a % b;

        System.out.println("First Number : " + a);
        System.out.println("Second Number : " + b);
        System.out.println("Addition : " + addition);
        System.out.println("Subtraction : " + subtraction);
        System.out.println("Multiplication : " + multiplication);
        System.out.println("Division : " + division);
        System.out.println("Modulus : " + modulus);
    }
}`,
        output: null
      },

      {
        title: "Character and ASCII Value",
        description:
          "Demonstrate the character data type by displaying a character and its corresponding ASCII/Unicode value.",
        code: `class CharacterDemo {
    public static void main(String[] args) {

        char ch = 'A';
        int asciiValue = ch;

        System.out.println("Character : " + ch);
        System.out.println("ASCII/Unicode Value : " + asciiValue);
    }
}`,
        output: null
      },

      {
        title: "Boolean Variables and Expressions",
        description:
          "Demonstrate boolean variables and boolean expressions using relational operators.",
        code: `class BooleanDemo {
    public static void main(String[] args) {

        boolean isJavaFun = true;
        boolean isRainy = false;

        System.out.println("Is Java Fun? " + isJavaFun);
        System.out.println("Is it Rainy? " + isRainy);

        int num1 = 15;
        int num2 = 10;

        boolean greaterThan = num1 > num2;
        boolean equalTo = num1 == num2;
        boolean lessThan = num1 < num2;

        System.out.println(num1 + " > " + num2 + " : " + greaterThan);
        System.out.println(num1 + " == " + num2 + " : " + equalTo);
        System.out.println(num1 + " < " + num2 + " : " + lessThan);
    }
}`,
        output: null
      },

      {
        title: "Variable Demo",
        description:
          "Declare and initialize different types of variables and display their values.",
        code: `class VariableDemo {
    public static void main(String[] args) {

        byte age = 20;
        short year = 2026;
        int salary = 50000;
        long population = 1400000000L;
        float height = 5.8f;
        double percentage = 92.75;
        char grade = 'A';
        boolean isPassed = true;
        String name = "John";

        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
        System.out.println("Year : " + year);
        System.out.println("Salary : " + salary);
        System.out.println("Population : " + population);
        System.out.println("Height : " + height);
        System.out.println("Percentage : " + percentage);
        System.out.println("Grade : " + grade);
        System.out.println("Passed : " + isPassed);
    }
}`,
        output: null
      },

      {
        title: "Swap Two Variables",
        description:
          "Swap the values of two variables using a temporary variable.",
        code: `class Swap {
    public static void main(String[] args) {

        int a = 10;
        int b = 20;
        int temp;

        System.out.println("a = " + a);
        System.out.println("b = " + b);

        temp = a;
        a = b;
        b = temp;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}`,
        output: null
      },

      {
        title: "Widening Type Conversion",
        description:
          "Demonstrate automatic widening type conversion between primitive data types.",
        code: `class WTC {
    public static void main(String[] args) {

        int intValue = 100;

        long longValue = intValue;
        float floatValue = intValue;
        double doubleValue = intValue;

        System.out.println("Int value : " + intValue);
        System.out.println("Long value : " + longValue);
        System.out.println("Float value : " + floatValue);
        System.out.println("Double value : " + doubleValue);
    }
}`,
        output: null
      },

      {
        title: "Narrowing Type Casting",
        description:
          "Demonstrate explicit narrowing type casting from one primitive data type to another.",
        code: `class NTC {
    public static void main(String[] args) {

        double doubleValue = 123.45;

        int intValue = (int) doubleValue;
        float floatValue = (float) doubleValue;
        short shortValue = (short) doubleValue;

        System.out.println("Double value : " + doubleValue);
        System.out.println("Int value : " + intValue);
        System.out.println("Float value : " + floatValue);
        System.out.println("Short value : " + shortValue);
    }
}`,
        output: null
      },

      {
        title: "Character and ASCII Conversion",
        description:
          "Convert a character to its ASCII/Unicode value and vice versa using type casting.",
        code: `class CAC {
    public static void main(String[] args) {

        char ch = 'A';
        int ascii = ch;

        int value = 66;
        char ch2 = (char) value;

        System.out.println("Character: " + ch);
        System.out.println("ASCII value: " + ascii);
        System.out.println("ASCII value: " + value);
        System.out.println("Character: " + ch2);
    }
}`,
        output: null
      },

      {
        title: "Even or Odd",
        description:
          "Check whether a given number is even or odd using the if-else control statement.",
        code: `class EvenOddCheck {
    public static void main(String[] args) {

        int number = 7;

        if (number % 2 == 0) {
            System.out.println(number + " is Even");
        } else {
            System.out.println(number + " is Odd");
        }
    }
}`,
        output: null
      },

      {
        title: "Largest of Two Numbers",
        description:
          "Find the largest of two numbers using the if-else statement.",
        code: `class LargestOfTwoNumbers {
    public static void main(String[] args) {

        int a = 25;
        int b = 40;

        if (a > b) {
            System.out.println(a + " is the largest number");
        } else {
            System.out.println(b + " is the largest number");
        }
    }
}`,
        output: null
      },

      {
        title: "Reserved Keywords",
        description:
          "Demonstrate valid Java identifiers and explain why Java reserved keywords cannot be used as variable names.",
        code: `class ReservedKeywordsDemo {
    public static void main(String[] args) {

        int number = 10;
        int totalMarks = 95;
        float average_score = 88.5f;
        char grade = 'A';

        System.out.println("Number : " + number);
        System.out.println("Total Marks : " + totalMarks);
        System.out.println("Average Score : " + average_score);
        System.out.println("Grade : " + grade);

        /*
         * Keywords like int, class, public, static, etc.
         * cannot be used as variable names because they are
         * reserved by Java for predefined purposes.
         *
         * Invalid examples:
         * int int = 5;
         * class class = 10;
         */
    }
}`,
        output: null
      },

      {
        title: "For Loop — Numbers 1 to 10",
        description:
          "Demonstrate the use of a for loop by displaying numbers from 1 to 10.",
        code: `class ForLoopDemo {
    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 4
  // =========================================================
  {
    id: 4,
    title: "Week 04",
    subtitle: "Viva Examination",
    programs: []
  },


  // =========================================================
  // WEEK 5
  // =========================================================
  {
    id: 5,
    title: "Week 05",
    subtitle: "Viva Examination",
    programs: []
  },


  // =========================================================
  // WEEK 6
  // =========================================================
  {
    id: 6,
    title: "Week 06",
    subtitle: "Unit 2 — Object Oriented Programming",
    programs: [

      {
        title: "Student Information System",
        description:
          "Create a Student Information System using classes, objects, instance variables and methods.",
        code: `class StuinfoSys {

    int rollNo;
    String name;
    String branch;
    double cgpa;

    void setData(int r, String n, String b, double c) {
        rollNo = r;
        name = n;
        branch = b;
        cgpa = c;
    }

    void display() {
        System.out.println("------ Student Information ------");
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
        System.out.println("CGPA : " + cgpa);
    }

    public static void main(String[] args) {
        StuinfoSys s = new StuinfoSys();

        s.setData(101, "Sathwika", "AIML", 9.5);
        s.display();
    }
}`,
        output: null
      },

      {
        title: "Employee Information System",
        description:
          "Create an Employee Information System using a class, object, variables and methods.",
        code: `class EmpinfoSys {

    int empId;
    String name;
    String department;
    double salary;

    void setData(int id, String n, String d, double s) {
        empId = id;
        name = n;
        department = d;
        salary = s;
    }

    void display() {
        System.out.println("------ Employee Information ------");
        System.out.println("Employee ID : " + empId);
        System.out.println("Name : " + name);
        System.out.println("Department : " + department);
        System.out.println("Salary : " + salary);
    }

    public static void main(String[] args) {
        EmpinfoSys e = new EmpinfoSys();

        e.setData(1001, "Rahul", "HR", 35000);
        e.display();
    }
}`,
        output: null
      },

      {
        title: "Book Details — Multiple Objects",
        description:
          "Create three Book objects and display their book ID, title and author.",
        code: `class BookDetails {

    int bookId;
    String title;
    String author;

    BookDetails(int id, String t, String a) {
        bookId = id;
        title = t;
        author = a;
    }

    void display() {
        System.out.println("Book ID : " + bookId);
        System.out.println("Title : " + title);
        System.out.println("Author : " + author);
        System.out.println();
    }

    public static void main(String[] args) {

        BookDetails b1 =
            new BookDetails(1, "Java", "James");

        BookDetails b2 =
            new BookDetails(2, "Python", "Guido");

        BookDetails b3 =
            new BookDetails(3, "C Programming", "Dennis");

        b1.display();
        b2.display();
        b3.display();
    }
}`,
        output: null
      },

      {
        title: "Array of Student Objects",
        description:
          "Create an array of five Student objects, accept their details and display them.",
        code: `import java.util.Scanner;

class StudentArray {

    int rollNo;
    String name;

    void input(Scanner sc) {
        System.out.print("Enter Roll No: ");
        rollNo = sc.nextInt();

        System.out.print("Enter Name: ");
        name = sc.next();
    }

    void display() {
        System.out.println(rollNo + " " + name);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        StudentArray[] s = new StudentArray[5];

        for (int i = 0; i < 5; i++) {
            s[i] = new StudentArray();
            s[i].input(sc);
        }

        System.out.println("\\nStudent Details");

        for (int i = 0; i < 5; i++) {
            s[i].display();
        }

        sc.close();
    }
}`,
        output: null
      },

      {
        title: "Reference Assignment",
        description:
          "Demonstrate assigning one object reference variable to another.",
        code: `class RefAssignment {

    String name;

    public static void main(String[] args) {

        RefAssignment s1 = new RefAssignment();

        s1.name = "Ravi";

        RefAssignment s2 = s1;

        s2.name = "Sathwika";

        System.out.println("s1 Name : " + s1.name);
        System.out.println("s2 Name : " + s2.name);
    }
}`,
        output: null
      },

      {
        title: "Comparing Object References",
        description:
          "Compare two object reference variables using the == operator.",
        code: `class EmpReference {

    String name;

    public static void main(String[] args) {

        EmpReference e1 = new EmpReference();

        e1.name = "Anil";

        EmpReference e2 = e1;

        System.out.println(
            "Are both references same? " + (e1 == e2)
        );
    }
}`,
        output: null
      },

      {
        title: "Calculator Using Methods",
        description:
          "Create methods for addition, subtraction, multiplication and division.",
        code: `class CalcMethods {

    int add(int a, int b) {
        return a + b;
    }

    int subtract(int a, int b) {
        return a - b;
    }

    int multiply(int a, int b) {
        return a * b;
    }

    double divide(int a, int b) {
        return (double) a / b;
    }

    public static void main(String[] args) {

        CalcMethods c = new CalcMethods();

        System.out.println("Addition = " + c.add(10, 5));
        System.out.println("Subtraction = " + c.subtract(10, 5));
        System.out.println("Multiplication = " + c.multiply(10, 5));
        System.out.println("Division = " + c.divide(10, 5));
    }
}`,
        output: null
      },

      {
        title: "Rectangle Operations",
        description:
          "Calculate the area and perimeter of a rectangle using a constructor and methods.",
        code: `class RectOperations {

    double length;
    double width;

    RectOperations(double l, double w) {
        length = l;
        width = w;
    }

    double area() {
        return length * width;
    }

    double perimeter() {
        return 2 * (length + width);
    }

    public static void main(String[] args) {

        RectOperations r =
            new RectOperations(10, 5);

        System.out.println("Area = " + r.area());
        System.out.println("Perimeter = " + r.perimeter());
    }
}`,
        output: null
      },

      {
        title: "Student Constructors",
        description:
          "Demonstrate default and parameterized constructors using Student objects.",
        code: `class StudentConstructors {

    int rollNo;
    String name;
    String branch;

    StudentConstructors() {
        rollNo = 101;
        name = "Sathwika";
        branch = "AIML";
    }

    StudentConstructors(int r, String n, String b) {
        rollNo = r;
        name = n;
        branch = b;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
        System.out.println();
    }

    public static void main(String[] args) {

        StudentConstructors s1 =
            new StudentConstructors();

        StudentConstructors s2 =
            new StudentConstructors(102, "Rahul", "CSE");

        System.out.println("Default Constructor");
        s1.display();

        System.out.println("Parameterized Constructor");
        s2.display();
    }
}`,
        output: null
      },

      {
        title: "Constructor Overloading",
        description:
          "Demonstrate constructor overloading using constructors with different parameter lists.",
        code: `class ConstructorOverload {

    int accountNumber;
    String accountHolder;
    double balance;

    ConstructorOverload() {
        accountNumber = 1001;
        accountHolder = "Sathwika";
        balance = 0;
    }

    ConstructorOverload(int accNo, String holder) {
        accountNumber = accNo;
        accountHolder = holder;
        balance = 0;
    }

    ConstructorOverload(
        int accNo,
        String holder,
        double bal
    ) {
        accountNumber = accNo;
        accountHolder = holder;
        balance = bal;
    }

    void display() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolder);
        System.out.println("Balance : " + balance);
        System.out.println();
    }

    public static void main(String[] args) {

        ConstructorOverload b1 =
            new ConstructorOverload();

        ConstructorOverload b2 =
            new ConstructorOverload(1002, "Rahul");

        ConstructorOverload b3 =
            new ConstructorOverload(1003, "Anil", 5000);

        b1.display();
        b2.display();
        b3.display();
    }
}`,
        output: null
      },

      {
        title: "Using this Keyword",
        description:
          "Demonstrate the use of the this keyword for referring to the current object's variables.",
        code: `class ThisKeywordDemo {

    int rollNo;
    String name;

    ThisKeywordDemo(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {

        ThisKeywordDemo s =
            new ThisKeywordDemo(101, "Sathwika");

        s.display();
    }
}`,
        output: null
      },

      {
        title: "Constructor Chaining",
        description:
          "Demonstrate constructor chaining using this() between constructors.",
        code: `class ConstructorChaining {

    ConstructorChaining() {
        this(101);
        System.out.println("Default Constructor");
    }

    ConstructorChaining(int rollNo) {
        this(rollNo, "Sathwika");
        System.out.println("Roll Number : " + rollNo);
    }

    ConstructorChaining(int rollNo, String name) {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {
        new ConstructorChaining();
    }
}`,
        output: null
      },

      {
        title: "Demonstrating Garbage Collection",
        description:
          "Demonstrate objects becoming eligible for garbage collection and request garbage collection using System.gc().",
        code: `class GarbageCollection {

    public static void main(String[] args) {

        GarbageCollection obj1 =
            new GarbageCollection();

        GarbageCollection obj2 =
            new GarbageCollection();

        obj1 = null;
        obj2 = null;

        System.gc();

        System.out.println(
            "Garbage Collection Requested"
        );
    }
}`,
        output: null
      },

      {
        title: "Object Eligibility for Garbage Collection",
        description:
          "Demonstrate different situations in which objects become eligible for garbage collection.",
        code: `class GarbageEligibility {

    public static void main(String[] args) {

        GarbageEligibility obj1 =
            new GarbageEligibility();

        GarbageEligibility obj2 =
            new GarbageEligibility();

        // obj1 becomes eligible
        obj1 = null;

        // Old object referenced by obj2
        // becomes eligible
        obj2 = new GarbageEligibility();

        // Anonymous object becomes eligible
        new GarbageEligibility();

        System.gc();

        System.out.println(
            "Objects are eligible for Garbage Collection"
        );
    }
}`,
        output: null
      },

      {
        title: "Method Overloading",
        description:
          "Demonstrate method overloading using methods with different parameter lists.",
        code: `class ArithmeticOverload {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {

        ArithmeticOverload obj =
            new ArithmeticOverload();

        System.out.println(
            "Sum = " + obj.add(10, 20)
        );

        System.out.println(
            "Sum = " + obj.add(10, 20, 30)
        );

        System.out.println(
            "Sum = " + obj.add(10.5, 20.5)
        );
    }
}`,
        output: null
      },

      {
        title: "Overloading Area Methods",
        description:
          "Calculate the area of a circle, rectangle and square using overloaded methods.",
        code: `class AreaOverload {

    double area(double radius) {
        return 3.14 * radius * radius;
    }

    int area(int length, int breadth) {
        return length * breadth;
    }

    int area(int side) {
        return side * side;
    }

    public static void main(String[] args) {

        AreaOverload obj =
            new AreaOverload();

        System.out.println(
            "Area of Circle : " + obj.area(7.0)
        );

        System.out.println(
            "Area of Rectangle : " + obj.area(10, 5)
        );

        System.out.println(
            "Area of Square : " + obj.area(4)
        );
    }
}`,
        output: null
      },

      {
        title: "Passing Student Object",
        description:
          "Pass a Student object to a method and display its details.",
        code: `class PassingStudentObj {

    int rollNo;
    String name;
    String branch;

    PassingStudentObj(
        int rollNo,
        String name,
        String branch
    ) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }

    static void displayStudent(PassingStudentObj s) {

        System.out.println("Roll Number : " + s.rollNo);
        System.out.println("Name : " + s.name);
        System.out.println("Branch : " + s.branch);
    }

    public static void main(String[] args) {

        PassingStudentObj student =
            new PassingStudentObj(
                101,
                "Sathwika",
                "AIML"
            );

        displayStudent(student);
    }
}`,
        output: null
      },

      {
        title: "Comparing Employee Salaries",
        description:
          "Compare the salaries of two Employee objects and display the employee with the higher salary.",
        code: `class CompareEmpSalary {

    int empId;
    String name;
    double salary;

    CompareEmpSalary(
        int empId,
        String name,
        double salary
    ) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }

    static void compareSalary(
        CompareEmpSalary e1,
        CompareEmpSalary e2
    ) {

        if (e1.salary > e2.salary) {

            System.out.println(
                "Higher Salary Employee : " + e1.name
            );

            System.out.println(
                "Salary : " + e1.salary
            );

        } else if (e2.salary > e1.salary) {

            System.out.println(
                "Higher Salary Employee : " + e2.name
            );

            System.out.println(
                "Salary : " + e2.salary
            );

        } else {

            System.out.println(
                "Both employees have equal salary."
            );
        }
    }

    public static void main(String[] args) {

        CompareEmpSalary e1 =
            new CompareEmpSalary(
                101,
                "Rahul",
                35000
            );

        CompareEmpSalary e2 =
            new CompareEmpSalary(
                102,
                "Anil",
                45000
            );

        compareSalary(e1, e2);
    }
}`,
        output: null
      },

      {
        title: "Returning a Student Object",
        description:
          "Create a Student object inside a method and return the object to the caller.",
        code: `class ReturnStudentObj {

    int rollNo;
    String name;
    String branch;

    ReturnStudentObj(
        int rollNo,
        String name,
        String branch
    ) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }

    static ReturnStudentObj createStudent() {

        ReturnStudentObj s =
            new ReturnStudentObj(
                101,
                "Sathwika",
                "AIML"
            );

        return s;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
        System.out.println("Branch : " + branch);
    }

    public static void main(String[] args) {

        ReturnStudentObj student =
            createStudent();

        student.display();
    }
}`,
        output: null
      },

      {
        title: "Returning a Bank Account Object",
        description:
          "Pass a Bank Account object to a method, update its balance and return the object.",
        code: `class ReturnBankObj {

    int accountNumber;
    String accountHolder;
    double balance;

    ReturnBankObj(
        int accountNumber,
        String accountHolder,
        double balance
    ) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    static ReturnBankObj updateBalance(
        ReturnBankObj account,
        double amount
    ) {
        account.balance =
            account.balance + amount;

        return account;
    }

    void display() {
        System.out.println(
            "Account Number : " + accountNumber
        );

        System.out.println(
            "Account Holder : " + accountHolder
        );

        System.out.println(
            "Balance : " + balance
        );
    }

    public static void main(String[] args) {

        ReturnBankObj account =
            new ReturnBankObj(
                1001,
                "Sathwika",
                5000
            );

        account =
            updateBalance(account, 2000);

        account.display();
    }
}`,
        output: null
      },

      {
        title: "Static Variable",
        description:
          "Demonstrate a static variable by counting the number of Student objects created.",
        code: `class StaticStudentCount {

    int rollNo;
    String name;

    static int count = 0;

    StaticStudentCount(
        int rollNo,
        String name
    ) {
        this.rollNo = rollNo;
        this.name = name;
        count++;
    }

    void display() {
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Name : " + name);
    }

    public static void main(String[] args) {

        StaticStudentCount s1 =
            new StaticStudentCount(101, "Sathwika");

        StaticStudentCount s2 =
            new StaticStudentCount(102, "Rahul");

        StaticStudentCount s3 =
            new StaticStudentCount(103, "Anil");

        s1.display();
        System.out.println();

        s2.display();
        System.out.println();

        s3.display();

        System.out.println(
            "\\nTotal Students : " + count
        );
    }
}`,
        output: null
      },

      {
        title: "Static Methods",
        description:
          "Demonstrate static methods by calculating square, cube and factorial.",
        code: `class StaticUtility {

    static int square(int n) {
        return n * n;
    }

    static int cube(int n) {
        return n * n * n;
    }

    static long factorial(int n) {

        long fact = 1;

        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }

        return fact;
    }

    public static void main(String[] args) {

        int n = 5;

        System.out.println(
            "Square : " + square(n)
        );

        System.out.println(
            "Cube : " + cube(n)
        );

        System.out.println(
            "Factorial : " + factorial(n)
        );
    }
}`,
        output: null
      },

      {
        title: "Final Keyword",
        description:
          "Demonstrate final variables, final methods and final classes.",
        code: `class FinalKeywordDemo {

    final int MAX_MARKS = 100;

    final void display() {

        System.out.println(
            "Final method executed."
        );

        System.out.println(
            "Maximum Marks : " + MAX_MARKS
        );
    }

    final class FinalClass {

        void show() {
            System.out.println(
                "This is a final class."
            );
        }
    }

    public static void main(String[] args) {

        FinalKeywordDemo obj =
            new FinalKeywordDemo();

        obj.display();

        FinalKeywordDemo.FinalClass f =
            obj.new FinalClass();

        f.show();
    }
}`,
        output: null
      },

      {
        title: "Blank Final Variable",
        description:
          "Demonstrate a blank final variable initialized through a constructor.",
        code: `class BlankFinalEmp {

    final int employeeId;
    String name;

    BlankFinalEmp(
        int employeeId,
        String name
    ) {
        this.employeeId = employeeId;
        this.name = name;
    }

    void display() {

        System.out.println(
            "Employee ID : " + employeeId
        );

        System.out.println(
            "Name : " + name
        );
    }

    public static void main(String[] args) {

        BlankFinalEmp e1 =
            new BlankFinalEmp(
                1001,
                "Sathwika"
            );

        BlankFinalEmp e2 =
            new BlankFinalEmp(
                1002,
                "Rahul"
            );

        e1.display();

        System.out.println();

        e2.display();
    }
}`,
        output: null
      },

      {
        title: "College and Department — Nested Class",
        description:
          "Demonstrate a static nested Department class inside a College class.",
        code: `class CollegeDeptNested {

    String collegeName =
        "ABC Engineering College";

    static class Department {

        String departmentName;
        String hodName;

        Department(
            String departmentName,
            String hodName
        ) {
            this.departmentName = departmentName;
            this.hodName = hodName;
        }

        void display() {

            System.out.println(
                "Department : " + departmentName
            );

            System.out.println(
                "HOD : " + hodName
            );
        }
    }

    public static void main(String[] args) {

        CollegeDeptNested college =
            new CollegeDeptNested();

        CollegeDeptNested.Department dept =
            new CollegeDeptNested.Department(
                "AIML",
                "Dr. Kumar"
            );

        System.out.println(
            "College : " + college.collegeName
        );

        dept.display();
    }
}`,
        output: null
      },

      {
        title: "Employee Address — Nested Class",
        description:
          "Demonstrate a static nested Address class associated with an Employee.",
        code: `class EmployeeAddressNested {

    String employeeName;
    int employeeId;

    EmployeeAddressNested(
        String employeeName,
        int employeeId
    ) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
    }

    static class Address {

        String city;
        String state;

        Address(String city, String state) {
            this.city = city;
            this.state = state;
        }

        void display() {

            System.out.println(
                "City : " + city
            );

            System.out.println(
                "State : " + state
            );
        }
    }

    public static void main(String[] args) {

        EmployeeAddressNested emp =
            new EmployeeAddressNested(
                "Sathwika",
                1001
            );

        EmployeeAddressNested.Address address =
            new EmployeeAddressNested.Address(
                "Hyderabad",
                "Telangana"
            );

        System.out.println(
            "Employee ID : " + emp.employeeId
        );

        System.out.println(
            "Employee Name : " + emp.employeeName
        );

        address.display();
    }
}`,
        output: null
      },

      {
        title: "Student Address — Inner Class",
        description:
          "Demonstrate a non-static inner Address class inside StudentAddressInner.",
        code: `class StudentAddressInner {

    int rollNo;
    String name;

    StudentAddressInner(
        int rollNo,
        String name
    ) {
        this.rollNo = rollNo;
        this.name = name;
    }

    class Address {

        String city;
        String state;

        Address(String city, String state) {
            this.city = city;
            this.state = state;
        }

        void display() {

            System.out.println(
                "City : " + city
            );

            System.out.println(
                "State : " + state
            );
        }
    }

    public static void main(String[] args) {

        StudentAddressInner student =
            new StudentAddressInner(
                101,
                "Sathwika"
            );

        StudentAddressInner.Address address =
            student.new Address(
                "Hyderabad",
                "Telangana"
            );

        System.out.println(
            "Roll Number : " + student.rollNo
        );

        System.out.println(
            "Name : " + student.name
        );

        address.display();
    }
}`,
        output: null
      },

      {
        title: "Library Management — Inner Class",
        description:
          "Demonstrate an inner Book class inside a LibraryBookInner class.",
        code: `class LibraryBookInner {

    String libraryName =
        "Central Library";

    class Book {

        int bookId;
        String title;
        String author;

        Book(
            int bookId,
            String title,
            String author
        ) {
            this.bookId = bookId;
            this.title = title;
            this.author = author;
        }

        void display() {

            System.out.println(
                "Library : " + libraryName
            );

            System.out.println(
                "Book ID : " + bookId
            );

            System.out.println(
                "Title : " + title
            );

            System.out.println(
                "Author : " + author
            );
        }
    }

    public static void main(String[] args) {

        LibraryBookInner library =
            new LibraryBookInner();

        LibraryBookInner.Book book =
            library.new Book(
                101,
                "Java Programming",
                "James Gosling"
            );

        book.display();
    }
}`
        ,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 7
  // =========================================================
  {
    id: 7,
    title: "Week 07",
    subtitle: "String Handling",
    programs: [

      {
        title: "String Constructors",
        description:
          "Demonstrate different ways of creating and initializing String objects using String constructors, including literals, new String(), character arrays and byte arrays.",
        code: `class StringConstructorsDemo {

    public static void main(String[] args) {

        // String using literal
        String s1 = "Hello Java";

        // String using new
        String s2 = new String("Hello Java");

        // String using character array
        char[] chars = {'J', 'a', 'v', 'a'};
        String s3 = new String(chars);

        // String using byte array
        byte[] bytes = {65, 66, 67};
        String s4 = new String(bytes);

        System.out.println("String Literal : " + s1);
        System.out.println("Using new String : " + s2);
        System.out.println("Character Array : " + s3);
        System.out.println("Byte Array : " + s4);

        // Difference between literal and new
        System.out.println(
            "s1 == s2 : " + (s1 == s2)
        );

        System.out.println(
            "s1.equals(s2) : " + s1.equals(s2)
        );
    }
}`,
        output: null
      },

      {
        title: "StringBuffer Class",
        description:
          "Demonstrate mutable string operations using StringBuffer including append, insert, replace, delete and reverse.",
        code: `class StringBufferDemo {

    public static void main(String[] args) {

        StringBuffer sb =
            new StringBuffer("Hello");

        // Append
        sb.append(" Java");

        // Insert
        sb.insert(6, "World ");

        // Replace
        sb.replace(6, 12, "Beautiful");

        // Delete
        sb.delete(6, 16);

        // Reverse
        sb.reverse();

        System.out.println(
            "StringBuffer : " + sb
        );

        System.out.println(
            "Length : " + sb.length()
        );

        System.out.println(
            "Capacity : " + sb.capacity()
        );
    }
}`,
        output: null
      },

      {
        title: "StringTokenizer Class",
        description:
          "Tokenize a sentence using StringTokenizer, display individual tokens, count the tokens and repeat the operation using a specified delimiter.",
        code: `import java.util.Scanner;
import java.util.StringTokenizer;

class StringTokenizerDemo {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();

        StringTokenizer st =
            new StringTokenizer(sentence);

        System.out.println("Tokens:");

        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }

        System.out.println(
            "Total Tokens: " +
            new StringTokenizer(sentence).countTokens()
        );

        System.out.print(
            "Enter delimiter: "
        );

        String delimiter = sc.nextLine();

        StringTokenizer custom =
            new StringTokenizer(
                sentence,
                delimiter
            );

        System.out.println(
            "Tokens using delimiter:"
        );

        while (custom.hasMoreTokens()) {
            System.out.println(custom.nextToken());
        }

        sc.close();
    }
}`,
        output: null
      },

      {
        title: "Basic Inheritance",
        description:
          "Demonstrate basic inheritance by creating a child class that inherits methods from a parent class.",
        code: `class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog d = new Dog();

        d.eat();
        d.bark();
    }
}`,
        output: null
      },

      {
        title: "Using super Keyword",
        description:
          "Demonstrate the use of the super keyword to access parent class variables and methods.",
        code: `class Animal {
    String name = "Animal";

    void display() {
        System.out.println("Animal class");
    }
}

class Dog extends Animal {
    String name = "Dog";

    void display() {
        System.out.println("Dog class");
    }

    void show() {
        System.out.println("Child name: " + name);
        System.out.println("Parent name: " + super.name);

        super.display();
        display();
    }
}

public class SuperDemo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.show();
    }
}`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 8
  // =========================================================
  {
    id: 8,
    title: "Week 08",
    subtitle: "Inheritance",
    programs: [

      {
        title: "Single Inheritance",
        description:
          "Demonstrate single inheritance using a Person superclass and Student subclass.",
        code: `class Person {

    String name;
    int age;

    void displayPersonDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

class Student extends Person {

    int rollNo;
    String branch;

    void displayStudentDetails() {

        displayPersonDetails();

        System.out.println(
            "Roll Number: " + rollNo
        );

        System.out.println(
            "Branch: " + branch
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Student s = new Student();

        s.name = "Rahul";
        s.age = 20;
        s.rollNo = 101;
        s.branch = "Computer Science";

        System.out.println("Student Details:");

        s.displayStudentDetails();
    }
}`,
        output: null
      },

      {
        title: "Using super Keyword",
        description:
          "Demonstrate super for accessing superclass variables and methods.",
        code: `class Vehicle {

    int speed = 80;

    void display() {
        System.out.println(
            "Vehicle speed: " + speed
        );
    }
}

class Car extends Vehicle {

    String model = "Toyota";

    @Override
    void display() {

        System.out.println(
            "Car model: " + model
        );

        System.out.println(
            "Vehicle speed using super: " +
            super.speed
        );

        super.display();
    }
}

public class Main {

    public static void main(String[] args) {

        Car c = new Car();

        c.display();
    }
}`,
        output: null
      },

      {
        title: "Multilevel Inheritance",
        description:
          "Demonstrate multilevel inheritance using Person, Employee and Manager classes.",
        code: `class Person {

    String name;
    int age;

    void displayPersonDetails() {

        System.out.println(
            "Name: " + name
        );

        System.out.println(
            "Age: " + age
        );
    }
}

class Employee extends Person {

    int employeeId;
    double salary;

    void displayEmployeeDetails() {

        System.out.println(
            "Employee ID: " + employeeId
        );

        System.out.println(
            "Salary: " + salary
        );
    }
}

class Manager extends Employee {

    String department;

    void displayManagerDetails() {

        displayPersonDetails();
        displayEmployeeDetails();

        System.out.println(
            "Department: " + department
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Manager m = new Manager();

        m.name = "Anil";
        m.age = 35;
        m.employeeId = 1001;
        m.salary = 75000;
        m.department = "IT";

        m.displayManagerDetails();
    }
}`,
        output: null
      },

      {
        title: "Method Overriding",
        description:
          "Demonstrate method overriding using Animal, Dog and Cat classes.",
        code: `class Animal {

    void sound() {
        System.out.println(
            "Animal makes a sound"
        );
    }
}

class Dog extends Animal {

    @Override
    void sound() {
        System.out.println(
            "Dog barks"
        );
    }
}

class Cat extends Animal {

    @Override
    void sound() {
        System.out.println(
            "Cat meows"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Dog d = new Dog();
        Cat c = new Cat();

        d.sound();
        c.sound();
    }
}`,
        output: null
      },

      {
        title: "Dynamic Method Dispatch",
        description:
          "Demonstrate dynamic method dispatch using Shape as the superclass and Circle, Rectangle and Triangle as subclasses.",
        code: `class Shape {

    void draw() {
        System.out.println(
            "Drawing a shape"
        );
    }
}

class Circle extends Shape {

    @Override
    void draw() {
        System.out.println(
            "Drawing a circle"
        );
    }
}

class Rectangle extends Shape {

    @Override
    void draw() {
        System.out.println(
            "Drawing a rectangle"
        );
    }
}

class Triangle extends Shape {

    @Override
    void draw() {
        System.out.println(
            "Drawing a triangle"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Shape s;

        s = new Circle();
        s.draw();

        s = new Rectangle();
        s.draw();

        s = new Triangle();
        s.draw();
    }
}`,
        output: null
      },

      {
        title: "super with Method Overriding",
        description:
          "Demonstrate super.display() to invoke the superclass implementation before displaying subclass details.",
        code: `class Employee {

    void display() {
        System.out.println(
            "Employee details"
        );
    }
}

class Manager extends Employee {

    @Override
    void display() {

        super.display();

        System.out.println(
            "Manager details"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        Manager m = new Manager();

        m.display();
    }
}`,
        output: null
      },

      {
        title: "Multilevel Inheritance for Salary Calculation",
        description:
          "Calculate total salary using Employee, Developer and SeniorDeveloper classes.",
        code: `class Employee {

    double basicSalary = 30000;

    void displayBasicSalary() {

        System.out.println(
            "Basic Salary: " + basicSalary
        );
    }
}

class Developer extends Employee {

    double programmingAllowance = 10000;

    void displayProgrammingAllowance() {

        System.out.println(
            "Programming Allowance: " +
            programmingAllowance
        );
    }
}

class SeniorDeveloper extends Developer {

    double projectAllowance = 15000;

    void calculateSalary() {

        double totalSalary =
            basicSalary +
            programmingAllowance +
            projectAllowance;

        displayBasicSalary();
        displayProgrammingAllowance();

        System.out.println(
            "Project Allowance: " +
            projectAllowance
        );

        System.out.println(
            "Total Salary: " +
            totalSalary
        );
    }
}

public class Main {

    public static void main(String[] args) {

        SeniorDeveloper sd =
            new SeniorDeveloper();

        sd.calculateSalary();
    }
}`,
        output: null
      },

      {
        title: "Dynamic Method Dispatch for Bank Accounts",
        description:
          "Demonstrate dynamic method dispatch using BankAccount, SavingsAccount and CurrentAccount.",
        code: `class BankAccount {

    void calculateInterest() {

        System.out.println(
            "Calculating bank account interest"
        );
    }
}

class SavingsAccount extends BankAccount {

    @Override
    void calculateInterest() {

        System.out.println(
            "Savings Account Interest: 6%"
        );
    }
}

class CurrentAccount extends BankAccount {

    @Override
    void calculateInterest() {

        System.out.println(
            "Current Account Interest: 2%"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account;

        account = new SavingsAccount();
        account.calculateInterest();

        account = new CurrentAccount();
        account.calculateInterest();
    }
}`,
        output: null
      },

      {
        title: "Constructor Execution in Multilevel Inheritance",
        description:
          "Demonstrate the order of constructor execution in multilevel inheritance.",
        code: `class Person {

    Person() {
        System.out.println(
            "Person constructor executed"
        );
    }
}

class Student extends Person {

    Student() {
        System.out.println(
            "Student constructor executed"
        );
    }
}

class GraduateStudent extends Student {

    GraduateStudent() {
        System.out.println(
            "GraduateStudent constructor executed"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        GraduateStudent gs =
            new GraduateStudent();
    }
}`,
        output: null
      },

      {
        title: "Banking Application Using Inheritance",
        description:
          "Develop a simple banking application using inheritance with deposit, withdrawal and interest calculation.",
        code: `class BankAccount {

    String accountNumber;
    double balance;

    BankAccount(
        String accountNumber,
        double balance
    ) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    void deposit(double amount) {

        balance += amount;

        System.out.println(
            "Deposited: " + amount
        );
    }

    void withdraw(double amount) {

        if (amount <= balance) {

            balance -= amount;

            System.out.println(
                "Withdrawn: " + amount
            );

        } else {

            System.out.println(
                "Insufficient balance"
            );
        }
    }

    void calculateInterest() {

        System.out.println(
            "General bank account interest"
        );
    }

    void displayBalance() {

        System.out.println(
            "Account Number: " +
            accountNumber
        );

        System.out.println(
            "Balance: " + balance
        );
    }
}

class SavingsAccount extends BankAccount {

    SavingsAccount(
        String accountNumber,
        double balance
    ) {
        super(accountNumber, balance);
    }

    @Override
    void calculateInterest() {

        double interest =
            balance * 0.06;

        System.out.println(
            "Savings Interest: " + interest
        );
    }
}

class CurrentAccount extends BankAccount {

    CurrentAccount(
        String accountNumber,
        double balance
    ) {
        super(accountNumber, balance);
    }

    @Override
    void calculateInterest() {

        double interest =
            balance * 0.02;

        System.out.println(
            "Current Interest: " + interest
        );
    }
}

public class Main {

    public static void main(String[] args) {

        SavingsAccount savings =
            new SavingsAccount(
                "SA101",
                10000
            );

        System.out.println(
            "Savings Account:"
        );

        savings.deposit(2000);
        savings.withdraw(1000);
        savings.calculateInterest();
        savings.displayBalance();

        System.out.println();

        CurrentAccount current =
            new CurrentAccount(
                "CA101",
                20000
            );

        System.out.println(
            "Current Account:"
        );

        current.deposit(5000);
        current.withdraw(3000);
        current.calculateInterest();
        current.displayBalance();
    }
}`,
        output: null
      }
    ]
  },


  // =========================================================
  // WEEK 9
  // =========================================================
  {
    id: 9,
    title: "Week 09",
    subtitle: "Packages and Interfaces",
    programs: [

      {
        title: "Creating and Using a User-Defined Package",
        description:
          "Create a user-defined package named mypackage containing a Student class, and access it from another Java program outside the package.",
        code: `// File: mypackage/Student.java
package mypackage;

public class Student {
    String name;
    int rollNo;
    double marks;

    public Student(String name, int rollNo, double marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    public void display() {
        System.out.println("Name : " + name);
        System.out.println("Roll Number : " + rollNo);
        System.out.println("Marks : " + marks);
    }
}

// File: TestStudent.java
import mypackage.Student;

public class TestStudent {
    public static void main(String[] args) {
        Student s = new Student("Sathwika", 101, 92.5);
        s.display();
    }
}`,
        output: null
      },

      {
        title: "Importing Packages",
        description:
          "Demonstrate different ways of importing and accessing classes (Student and Faculty) from a package named college, using both a specific import and a wildcard import.",
        code: `// File: college/Student.java
package college;

public class Student {
    public void show() {
        System.out.println("Student class from college package");
    }
}

// File: college/Faculty.java
package college;

public class Faculty {
    public void show() {
        System.out.println("Faculty class from college package");
    }
}

// File: TestSpecificImport.java
import college.Student;

public class TestSpecificImport {
    public static void main(String[] args) {
        Student s = new Student();
        s.show();
    }
}

// File: TestWildcardImport.java
import college.*;

public class TestWildcardImport {
    public static void main(String[] args) {
        Student s = new Student();
        Faculty f = new Faculty();

        s.show();
        f.show();
    }
}`,
        output: null
      },

      {
        title: "Packages and Member Access",
        description:
          "Demonstrate the accessibility of public, private, protected and default members of a class from the same class, another class in the same package, and a class in a different package.",
        code: `// File: pkgone/Access.java
package pkgone;

public class Access {
    public int publicVar = 10;
    private int privateVar = 20;
    protected int protectedVar = 30;
    int defaultVar = 40;

    void display() {
        System.out.println("Accessing from same class:");
        System.out.println("Public : " + publicVar);
        System.out.println("Private : " + privateVar);
        System.out.println("Protected : " + protectedVar);
        System.out.println("Default : " + defaultVar);
    }
}

// File: pkgone/SamePackageTest.java
package pkgone;

public class SamePackageTest {
    public static void main(String[] args) {
        Access a = new Access();
        a.display();

        System.out.println();
        System.out.println("Accessing from another class in same package:");
        System.out.println("Public : " + a.publicVar);
        System.out.println("Protected : " + a.protectedVar);
        System.out.println("Default : " + a.defaultVar);
        // a.privateVar is NOT accessible here
    }
}

// File: pkgtwo/DifferentPackageTest.java
package pkgtwo;

import pkgone.Access;

public class DifferentPackageTest extends Access {
    public static void main(String[] args) {
        DifferentPackageTest obj = new DifferentPackageTest();

        System.out.println();
        System.out.println("Accessing from a class in a different package:");
        System.out.println("Public : " + obj.publicVar);
        System.out.println("Protected (via inheritance) : " + obj.protectedVar);
        // obj.privateVar and obj.defaultVar are NOT accessible here
    }
}`,
        output: null
      },

      {
        title: "Demonstrate CLASSPATH",
        description:
          "Demonstrate how Java uses the CLASSPATH to locate a user-defined package (utilities) containing a Calculator class, and access it from another program compiled and executed using the configured CLASSPATH.",
        code: `// File: utilities/Calculator.java
package utilities;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }
}

// File: TestCalculator.java
import utilities.Calculator;

public class TestCalculator {
    public static void main(String[] args) {
        Calculator c = new Calculator();

        System.out.println("Addition : " + c.add(15, 25));
        System.out.println("Multiplication : " + c.multiply(6, 7));
    }
}

/*
 Steps to compile and run using CLASSPATH:

 1. javac -d . utilities/Calculator.java
    (creates utilities/Calculator.class in the current folder)

 2. Set the CLASSPATH:
    Windows : set CLASSPATH=.;C:\\JavaPrograms
    Linux   : export CLASSPATH=.:/home/user/JavaPrograms

 3. javac TestCalculator.java
 4. java TestCalculator
*/`,
        output: null
      },

      {
        title: "Package Containing Multiple Classes",
        description:
          "Create and use a package named bank containing three classes — Account, Customer and Transaction — accessed together from a main class outside the package.",
        code: `// File: bank/Account.java
package bank;

public class Account {
    int accountNumber;
    double balance;

    public Account(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public void showAccount() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Balance : " + balance);
    }
}

// File: bank/Customer.java
package bank;

public class Customer {
    String name;
    int customerId;

    public Customer(String name, int customerId) {
        this.name = name;
        this.customerId = customerId;
    }

    public void showCustomer() {
        System.out.println("Customer ID : " + customerId);
        System.out.println("Customer Name : " + name);
    }
}

// File: bank/Transaction.java
package bank;

public class Transaction {
    String type;
    double amount;

    public Transaction(String type, double amount) {
        this.type = type;
        this.amount = amount;
    }

    public void showTransaction() {
        System.out.println("Transaction Type : " + type);
        System.out.println("Amount : " + amount);
    }
}

// File: BankTest.java
import bank.Account;
import bank.Customer;
import bank.Transaction;

public class BankTest {
    public static void main(String[] args) {
        Customer cust = new Customer("Sathwika", 501);
        Account acc = new Account(1001, 25000);
        Transaction txn = new Transaction("Deposit", 5000);

        cust.showCustomer();
        acc.showAccount();
        txn.showTransaction();
    }
}`,
        output: null
      },

      {
        title: "Defining and Implementing an Interface",
        description:
          "Create an interface Shape containing a method area(), and implement it using Circle and Rectangle classes.",
        code: `interface Shape {
    double area();
}

class Circle implements Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    public double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle implements Shape {
    double length, width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double area() {
        return length * width;
    }
}

public class ShapeDemo {
    public static void main(String[] args) {
        Shape c = new Circle(5);
        Shape r = new Rectangle(4, 6);

        System.out.println("Area of Circle : " + c.area());
        System.out.println("Area of Rectangle : " + r.area());
    }
}`,
        output: null
      },

      {
        title: "Implementing Multiple Interfaces",
        description:
          "Demonstrate how a class can implement multiple interfaces, Printable and Showable, using a single Demo class.",
        code: `interface Printable {
    void print();
}

interface Showable {
    void show();
}

class Demo implements Printable, Showable {
    public void print() {
        System.out.println("Printing...");
    }

    public void show() {
        System.out.println("Showing...");
    }
}

public class MultipleInterfaceDemo {
    public static void main(String[] args) {
        Demo d = new Demo();

        d.print();
        d.show();
    }
}`,
        output: null
      },

      {
        title: "Interface-Based Polymorphism",
        description:
          "Demonstrate polymorphism using an interface reference Vehicle, assigning objects of Car and Bike to it.",
        code: `interface Vehicle {
    void start();
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car starts with a key");
    }
}

class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike starts with a kick");
    }
}

public class VehicleDemo {
    public static void main(String[] args) {
        Vehicle v;

        v = new Car();
        v.start();

        v = new Bike();
        v.start();
    }
}`,
        output: null
      },

      {
        title: "Variables in Interfaces",
        description:
          "Demonstrate variables declared inside an interface named Constants (MAX_MARKS and PI), accessed from a class that implements the interface and directly using the interface name.",
        code: `interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14159;
}

class Circle implements Constants {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    void showConstants() {
        System.out.println("Max Marks : " + MAX_MARKS);
        System.out.println("PI : " + PI);
        System.out.println("Area : " + (PI * radius * radius));
    }
}

public class ConstantsDemo {
    public static void main(String[] args) {
        Circle c = new Circle(3);
        c.showConstants();

        System.out.println("Accessed using interface name:");
        System.out.println("Max Marks : " + Constants.MAX_MARKS);
        System.out.println("PI : " + Constants.PI);
    }
}`,
        output: null
      },

      {
        title: "Nested Interfaces",
        description:
          "Demonstrate the concept of a nested interface Department declared inside an outer class University, implemented and used in another class.",
        code: `class University {
    interface Department {
        void showDepartment();
    }
}

class CSEDepartment implements University.Department {
    public void showDepartment() {
        System.out.println("Department : Computer Science and Engineering");
    }
}

public class NestedInterfaceDemo {
    public static void main(String[] args) {
        University.Department dept = new CSEDepartment();
        dept.showDepartment();
    }
}`,
        output: null
      },

      {
        title: "Interface Inheritance",
        description:
          "Demonstrate inheritance between interfaces, where interface Dog extends interface Animal, and both methods are implemented in class Labrador.",
        code: `interface Animal {
    void eat();
}

interface Dog extends Animal {
    void bark();
}

class Labrador implements Dog {
    public void eat() {
        System.out.println("Labrador eats food");
    }

    public void bark() {
        System.out.println("Labrador barks");
    }
}

public class InterfaceInheritanceDemo {
    public static void main(String[] args) {
        Labrador l = new Labrador();

        l.eat();
        l.bark();
    }
}`,
        output: null
      },

      {
        title: "Real-World Application Using Interfaces",
        description:
          "Develop a Payment Processing System using an interface Payment with a pay(double amount) method, implemented by CreditCardPayment, UPIPayment and NetBankingPayment. The main program lets the user select a payment method and processes the payment.",
        code: `import java.util.Scanner;

interface Payment {
    void pay(double amount);
}

class CreditCardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid Rs. " + amount + " using Credit Card");
    }
}

class UPIPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid Rs. " + amount + " using UPI");
    }
}

class NetBankingPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid Rs. " + amount + " using Net Banking");
    }
}

public class PaymentDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Select Payment Method:");
        System.out.println("1. Credit Card");
        System.out.println("2. UPI");
        System.out.println("3. Net Banking");
        System.out.print("Enter choice: ");
        int choice = sc.nextInt();

        System.out.print("Enter amount: ");
        double amount = sc.nextDouble();

        Payment payment;

        switch (choice) {
            case 1:
                payment = new CreditCardPayment();
                break;
            case 2:
                payment = new UPIPayment();
                break;
            case 3:
                payment = new NetBankingPayment();
                break;
            default:
                System.out.println("Invalid choice");
                sc.close();
                return;
        }

        payment.pay(amount);
        sc.close();
    }
}`,
        output: null
      }
    ]
  }
];


// =========================================================
// GENERATED PROGRAM OUTPUTS
// =========================================================

const generatedOutputs = {
  "1-0": `ANSWER — COMPARATIVE STUDY OF PROGRAMMING LANGUAGES

Java is a class-based, object-oriented language designed for portability, security and large-scale application development. It uses the JVM to provide platform independence.

C is a procedural, compiled language mainly used for system programming, embedded systems and low-level development. It provides high performance but requires manual memory management.

C++ extends C with object-oriented and generic programming features. It is widely used where high performance and low-level control are required, such as games and real-time software.

Python is a high-level, open-source, multi-paradigm language known for its simple syntax. It is widely used in automation, data science, artificial intelligence, scripting and web development.

JavaScript is a dynamic language primarily used for interactive web development. Modern JavaScript engines use JIT compilation, and JavaScript also supports server-side development through environments such as Node.js.

COMPARISON RESULT

• Java — Strong OOP, portable, secure and suitable for enterprise applications.
• C — Very fast and efficient, with direct low-level control.
• C++ — High performance with powerful OOP and generic programming features.
• Python — Easiest to learn and highly productive for AI, data and automation.
• JavaScript — Essential for modern interactive web applications.

CONCLUSION

Each language is suitable for different requirements. Java is a strong choice for portable enterprise software, C for system-level programming, C++ for performance-intensive applications, Python for rapid development and AI/data work, and JavaScript for web applications.`,
  "2-0": `ORACLE JDK INSTALLATION — WINDOWS

1. Open the official Oracle Java download page in a browser.
2. Select the required JDK version for Windows.
3. Download the Windows x64 installer (.msi or .exe).
4. Run the downloaded installer.
5. Follow the installation wizard and complete the installation.
6. Note the JDK installation folder, for example: C:\Program Files\Java\jdk-<version>.
7. Open System Properties → Advanced → Environment Variables.
8. Create JAVA_HOME and set it to the JDK installation folder.
9. Edit Path and add: %JAVA_HOME%\bin
10. Open Command Prompt and run: java -version
11. Run: javac -version
12. Create HelloWorld.java, compile with javac HelloWorld.java, and execute with java HelloWorld.

Verification Output:
Hello, World!`,
  "2-1": `OPENJDK INSTALLATION — WINDOWS

1. Open a browser and choose a trusted OpenJDK distribution for Windows.
2. Select the required OpenJDK version and Windows x64 architecture.
3. Download the Windows installer (.msi) or the appropriate OpenJDK package.
4. Run the installer and complete all installation steps.
5. Note the OpenJDK installation folder.
6. Open System Properties → Advanced → Environment Variables.
7. Create JAVA_HOME and set it to the OpenJDK installation folder.
8. Edit Path and add: %JAVA_HOME%\bin
9. Open PowerShell or Command Prompt.
10. Run: java -version
11. Run: javac -version
12. Create HelloWorld.java, compile with javac HelloWorld.java, and execute with java HelloWorld.

Verification Output:
Hello, World!`,
  "3-0": `Hello, Java!`,
  "3-1": `Byte Value : 100
Short Value : 20000
Int Value : 500000
Long Value : 9876543210
Float Value : 12.5
Double Value : 123.456789
Char Value : A
Boolean Value : true`,
  "3-2": `First Number : 20
Second Number : 6
Addition : 26
Subtraction : 14
Multiplication : 120
Division : 3
Modulus : 2`,
  "3-3": `First Number : 15.5
Second Number : 4.5
Addition : 20.0
Subtraction : 11.0
Multiplication : 69.75
Division : 3.4444444
Modulus : 2.0`,
  "3-4": `Character : A
ASCII/Unicode Value : 65`,
  "3-5": `Is Java Fun? true
Is it Rainy? false
15 > 10 : true
15 == 10 : false
15 < 10 : false`,
  "3-6": `Name : John
Age : 20
Year : 2026
Salary : 50000
Population : 1400000000
Height : 5.8
Percentage : 92.75
Grade : A
Passed : true`,
  "3-7": `a = 10
b = 20
a = 20
b = 10`,
  "3-8": `Int value : 100
Long value : 100
Float value : 100.0
Double value : 100.0`,
  "3-9": `Double value : 123.45
Int value : 123
Float value : 123.45
Short value : 123`,
  "3-10": `Character: A
ASCII value: 65
ASCII value: 66
Character: B`,
  "3-11": `7 is Odd`,
  "3-12": `40 is the largest number`,
  "3-13": `Number : 10
Total Marks : 95
Average Score : 88.5
Grade : A`,
  "3-14": `1
2
3
4
5
6
7
8
9
10`,
  "6-0": `------ Student Information ------
Roll Number : 101
Name : Sathwika
Branch : AIML
CGPA : 9.5`,
  "6-1": `------ Employee Information ------
Employee ID : 1001
Name : Rahul
Department : HR
Salary : 35000.0`,
  "6-2": `Book ID : 1
Title : Java
Author : James

Book ID : 2
Title : Python
Author : Guido

Book ID : 3
Title : C Programming
Author : Dennis`,
  "6-3": `Enter Roll No: 101
Enter Name: Rahul
Enter Roll No: 102
Enter Name: Anil
Enter Roll No: 103
Enter Name: Priya
Enter Roll No: 104
Enter Name: Kiran
Enter Roll No: 105
Enter Name: Sneha

Student Details
101 Rahul
102 Anil
103 Priya
104 Kiran
105 Sneha`,
  "6-4": `s1 Name : Sathwika
s2 Name : Sathwika`,
  "6-5": `Are both references same? true`,
  "6-6": `Addition = 15
Subtraction = 5
Multiplication = 50
Division = 2.0`,
  "6-7": `Area = 50.0
Perimeter = 30.0`,
  "6-8": `Default Constructor
Roll Number : 101
Name : Sathwika
Branch : AIML

Parameterized Constructor
Roll Number : 102
Name : Rahul
Branch : CSE`,
  "6-9": `Account Number : 1001
Account Holder : Sathwika
Balance : 0.0

Account Number : 1002
Account Holder : Rahul
Balance : 0.0

Account Number : 1003
Account Holder : Anil
Balance : 5000.0`,
  "6-10": `Roll Number : 101
Name : Sathwika`,
  "6-11": `Roll Number : 101
Name : Sathwika
Roll Number : 101
Default Constructor`,
  "6-12": `Garbage Collection Requested`,
  "6-13": `Objects are eligible for Garbage Collection`,
  "6-14": `Sum = 30
Sum = 60
Sum = 31.0`,
  "6-15": `Area of Circle : 153.86
Area of Rectangle : 50
Area of Square : 16`,
  "6-16": `Roll Number : 101
Name : Sathwika
Branch : AIML`,
  "6-17": `Higher Salary Employee : Anil
Salary : 45000.0`,
  "6-18": `Roll Number : 101
Name : Sathwika
Branch : AIML`,
  "6-19": `Account Number : 1001
Account Holder : Sathwika
Balance : 7000.0`,
  "6-20": `Roll Number : 101
Name : Sathwika

Roll Number : 102
Name : Rahul

Roll Number : 103
Name : Anil

Total Students : 3`,
  "6-21": `Square : 25
Cube : 125
Factorial : 120`,
  "6-22": `Final method executed.
Maximum Marks : 100
This is a final class.`,
  "6-23": `Employee ID : 1001
Name : Sathwika

Employee ID : 1002
Name : Rahul`,
  "6-24": `College : ABC Engineering College
Department : AIML
HOD : Dr. Kumar`,
  "6-25": `Employee ID : 1001
Employee Name : Sathwika
City : Hyderabad
State : Telangana`,
  "6-26": `Roll Number : 101
Name : Sathwika
City : Hyderabad
State : Telangana`,
  "6-27": `Library : Central Library
Book ID : 101
Title : Java Programming
Author : James Gosling`,
  "7-0": `String Literal : Hello Java
Using new String : Hello Java
Character Array : Java
Byte Array : ABC
s1 == s2 : false
s1.equals(s2) : true`,
  "7-1": `StringBuffer : ava olleH
Length : 9
Capacity : 21`,
  "7-2": `Enter a sentence: Tokens:
Java
is
simple
Total Tokens: 3
Enter delimiter: Tokens using delimiter:
Java
is
simple`,
  "8-0": `Student Details:
Name: Rahul
Age: 20
Roll Number: 101
Branch: Computer Science`,
  "8-1": `Car model: Toyota
Vehicle speed using super: 80
Vehicle speed: 80`,
  "8-2": `Name: Anil
Age: 35
Employee ID: 1001
Salary: 75000.0
Department: IT`,
  "8-3": `Dog barks
Cat meows`,
  "8-4": `Drawing a circle
Drawing a rectangle
Drawing a triangle`,
  "8-5": `Employee details
Manager details`,
  "8-6": `Basic Salary: 30000.0
Programming Allowance: 10000.0
Project Allowance: 15000.0
Total Salary: 55000.0`,
  "8-7": `Savings Account Interest: 6%
Current Account Interest: 2%`,
  "8-8": `Person constructor executed
Student constructor executed
GraduateStudent constructor executed`,
  "8-9": `Savings Account:
Deposited: 2000.0
Withdrawn: 1000.0
Savings Interest: 660.0
Account Number: SA101
Balance: 11000.0

Current Account:
Deposited: 5000.0
Withdrawn: 3000.0
Current Interest: 440.0
Account Number: CA101
Balance: 22000.0`,
  "7-3": `Animal eats
Dog barks`,
  "7-4": `Child name: Dog
Parent name: Animal
Animal class
Dog class`,
  "9-0": `Name : Sathwika
Roll Number : 101
Marks : 92.5`,
  "9-1": `Running TestSpecificImport:
Student class from college package

Running TestWildcardImport:
Student class from college package
Faculty class from college package`,
  "9-2": `Accessing from same class:
Public : 10
Private : 20
Protected : 30
Default : 40

Accessing from another class in same package:
Public : 10
Protected : 30
Default : 40

Accessing from a class in a different package:
Public : 10
Protected (via inheritance) : 30`,
  "9-3": `Addition : 40
Multiplication : 42`,
  "9-4": `Customer ID : 501
Customer Name : Sathwika
Account Number : 1001
Balance : 25000.0
Transaction Type : Deposit
Amount : 5000.0`,
  "9-5": `Area of Circle : 78.53981633974483
Area of Rectangle : 24.0`,
  "9-6": `Printing...
Showing...`,
  "9-7": `Car starts with a key
Bike starts with a kick`,
  "9-8": `Max Marks : 100
PI : 3.14159
Area : 28.27431
Accessed using interface name:
Max Marks : 100
PI : 3.14159`,
  "9-9": `Department : Computer Science and Engineering`,
  "9-10": `Labrador eats food
Labrador barks`,
  "9-11": `Select Payment Method:
1. Credit Card
2. UPI
3. Net Banking
Enter choice: 2
Enter amount: 1500
Paid Rs. 1500.0 using UPI`
};

function getGeneratedOutput(weekId, index) {
  return generatedOutputs[`${weekId}-${index}`] || "Output not available yet.";
}

// =========================================================
// DOM ELEMENTS
// =========================================================

const app = document.getElementById("app");
const weekNav = document.getElementById("weekNav");
const pageTitle = document.getElementById("pageTitle");
const pageEyebrow = document.getElementById("pageEyebrow");
const sidebar = document.getElementById("sidebar");


// =========================================================
// HELPERS
// =========================================================

function totalPrograms() {
  return weeks.reduce(
    (sum, week) => sum + week.programs.length,
    0
  );
}


function renderWeekNav() {

  weekNav.innerHTML = weeks.map(week => `
    <button class="nav-item" data-page="week-${week.id}">
      <span>${String(week.id).padStart(2, "0")}</span>
      ${week.title}
    </button>
  `).join("");
}


function setActive(page) {

  document.querySelectorAll(".nav-item").forEach(item => {

    item.classList.toggle(
      "active",
      item.dataset.page === page
    );

  });
}


// =========================================================
// HOME
// =========================================================

function renderHome() {

  pageEyebrow.textContent = "MY JAVA RECORD";
  pageTitle.textContent = "Welcome to my record work";

  app.innerHTML = `

    <div class="page">

      <section class="hero">

        <div>

          <div class="hero-kicker">
            B.Tech • II Year • AI & ML — B
          </div>

          <h2>
            Welcome to my <em>Java</em> record work.
          </h2>

          <p>
            A collection of my Java programming lab work,
            arranged week by week with descriptions,
            source code and outputs.
          </p>

          <button
            class="primary-btn"
            onclick="scrollToWeeks()"
          >
            Explore my record →
          </button>

        </div>

        <div class="profile-photo-wrap">

          <img
            class="profile-photo"
            src="assets/profile.jpg"
            alt="Satwika"
          >

          <div class="photo-tag">
            Ch.S.L.K. Satwika ✦
          </div>

        </div>

      </section>


      <div class="stats">

        <div class="stat-card">
          <div class="stat-number">
            ${weeks.length}
          </div>

          <div class="stat-label">
            Weeks in record
          </div>
        </div>


        <div class="stat-card">
          <div class="stat-number">
            ${totalPrograms()}
          </div>

          <div class="stat-label">
            Programs added
          </div>
        </div>


        <div class="stat-card">
          <div class="stat-number">
            02
          </div>

          <div class="stat-label">
            Current year
          </div>
        </div>

      </div>


      <div id="weeksSection">

        <div class="section-heading">

          <div>
            <h2>Weekly Record</h2>

            <p>
              Choose a week to view its programs.
            </p>
          </div>

        </div>


        <div class="week-grid">

          ${weeks.map(week => `

            <article
              class="week-card"
              onclick="showPage('week-${week.id}')"
            >

              <div class="week-number">
                ${String(week.id).padStart(2, "0")} / WEEK
              </div>

              <h3>
                ${week.title}
              </h3>

              <p>
                ${
                  week.programs.length === 0
                    ? "Viva Exam"
                    : `${week.programs.length} program${week.programs.length === 1 ? "" : "s"} added`
                }
              </p>

              <div class="arrow">
                →
              </div>

            </article>

          `).join("")}

        </div>

      </div>

    </div>
  `;
}


function scrollToWeeks() {

  document
    .getElementById("weeksSection")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


// =========================================================
// PROFILE
// =========================================================

function renderProfile() {

  pageEyebrow.textContent = "STUDENT PROFILE";
  pageTitle.textContent = "My Profile";

  app.innerHTML = `

    <div class="page">

      <div class="profile-layout">

        <section class="profile-card profile-main">

          <img
            class="profile-photo"
            src="assets/profile.jpg"
            alt="Satwika"
          >

          <h2>
            Ch.S.L.K.Satwika
          </h2>

          <p>
            CSE — Artificial Intelligence & Machine Learning
          </p>

        </section>


        <section class="profile-card">

          <div class="section-heading">

            <div>

              <h2>
                Student Details
              </h2>

              <p>
                Academic information
              </p>

            </div>

          </div>


          <div class="details">

            <div class="detail-item">
              <small>Name</small>
              <strong>Ch.S.L.K.Satwika</strong>
            </div>

            <div class="detail-item">
              <small>Roll Number</small>
              <strong>25EU02071</strong>
            </div>

            <div class="detail-item">
              <small>Year</small>
              <strong>II Year</strong>
            </div>

            <div class="detail-item">
              <small>Branch</small>
              <strong>AI & ML</strong>
            </div>

            <div class="detail-item">
              <small>Section</small>
              <strong>B</strong>
            </div>

            <div class="detail-item">
              <small>Record</small>
              <strong>Java Programming</strong>
            </div>

          </div>


          <div class="about">

            <h3>
              About Me
            </h3>

            <p>
              I am a second-year B.Tech student specializing
              in Artificial Intelligence & Machine Learning.
              This website keeps my Java record work organized
              in one place.
            </p>

          </div>

        </section>

      </div>

    </div>
  `;
}


// =========================================================
// WEEK PAGE
// =========================================================

function renderWeek(id) {

  const week = weeks.find(
    w => w.id === Number(id)
  );

  if (!week) return;


  pageEyebrow.textContent = "JAVA RECORD";
  pageTitle.textContent = week.title;


  let content;


  if (week.id === 4 || week.id === 5) {

    content = `
      <div class="empty">

        <h3>
          Viva Examination
        </h3>

        <p>
          No programming task was assigned for this week.
        </p>

      </div>
    `;

  } else {

    content = week.programs.map(
      (program, index) => `

        <article
          class="program-card"
          onclick="showProgram(${week.id}, ${index})"
        >

          <div class="program-index">
            PROGRAM ${String(index + 1).padStart(2, "0")}
          </div>

          <h3>
            ${program.title}
          </h3>

          <p>
            ${program.description}
          </p>

          <div class="arrow">
            →
          </div>

        </article>

      `
    ).join("");

  }


  app.innerHTML = `

    <div class="page">

      <div class="breadcrumb">

        <button onclick="showPage('home')">
          Home
        </button>

        /

        ${week.title}

      </div>


      <div class="section-heading">

        <div>

          <h2>
            ${week.title}
          </h2>

          <p>
            ${week.subtitle}
          </p>

        </div>

      </div>


      <div class="program-grid">
        ${content}
      </div>

    </div>
  `;
}


// =========================================================
// PROGRAM DETAIL
// =========================================================

function showProgram(weekId, index) {

  const week = weeks.find(
    w => w.id === weekId
  );

  const program =
    week?.programs[index];

  if (!program) return;


  pageEyebrow.textContent =
    `WEEK ${String(weekId).padStart(2, "0")}`;

  pageTitle.textContent =
    program.title;


  const generatedOutput = getGeneratedOutput(weekId, index);

  const output = program.output

    ? `
      <img
        class="output-image"
        src="${program.output}"
        alt="Program output"
        onclick="openImage(this.src)"
      >
    `

    : `
      <div class="output-placeholder">
        <pre>${escapeHtml(generatedOutput)}</pre>
      </div>
    `;


  app.innerHTML = `

    <div class="page">

      <div class="breadcrumb">

        <button onclick="showPage('home')">
          Home
        </button>

        /

        <button
          onclick="showPage('week-${weekId}')"
        >
          ${week.title}
        </button>

        /

        ${program.title}

      </div>


      <h2 class="detail-title">
        ${program.title}
      </h2>


      <p class="detail-description">
        ${program.description}
      </p>


      <section class="code-card">

        <div class="card-head">

          <span>
            SOURCE CODE
          </span>

          <button
            class="copy-btn"
            onclick="copyCode()"
          >
            Copy code
          </button>

        </div>


        <pre id="codeText">${escapeHtml(
          program.code ||
          "// Java code will be added here."
        )}</pre>

      </section>


      <section class="output-card">

        <div class="card-head">
          <span>OUTPUT</span>
        </div>

        ${output}

      </section>


      <div class="detail-actions">

        <button
          class="secondary-btn"
          onclick="showPage('week-${weekId}')"
        >
          ← Back to ${week.title}
        </button>

      </div>

    </div>
  `;
}


// =========================================================
// CODE / IMAGE FUNCTIONS
// =========================================================

function escapeHtml(text) {

  return text.replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char])
  );
}


function copyCode() {

  const text =
    document.getElementById("codeText").innerText;

  navigator.clipboard.writeText(text);

  const btn =
    document.querySelector(".copy-btn");

  btn.textContent =
    "Copied ✓";

  setTimeout(() => {

    btn.textContent =
      "Copy code";

  }, 1500);
}


function openImage(src) {

  window.open(
    src,
    "_blank"
  );
}


// =========================================================
// PAGE NAVIGATION
// =========================================================

function showPage(page) {

  sidebar.classList.remove("open");

  setActive(page);


  if (page === "home") {

    renderHome();

  } else if (page === "profile") {

    renderProfile();

  } else if (page.startsWith("week-")) {

    renderWeek(
      page.split("-")[1]
    );

  }
}


// =========================================================
// NAVIGATION EVENTS
// =========================================================

document.addEventListener(
  "click",
  event => {

    const nav =
      event.target.closest(".nav-item");

    if (nav) {

      showPage(
        nav.dataset.page
      );

    }

  }
);


// =========================================================
// MOBILE MENU
// =========================================================

document
  .getElementById("mobileMenu")
  .addEventListener(
    "click",
    () => {

      sidebar.classList.toggle("open");

    }
  );


// =========================================================
// THEME
// =========================================================

document
  .getElementById("themeToggle")
  .addEventListener(
    "click",
    () => {

      document.body.classList.toggle("dark");

      localStorage.setItem(
        "java-record-theme",
        document.body.classList.contains("dark")
          ? "dark"
          : "light"
      );

    }
  );


if (
  localStorage.getItem(
    "java-record-theme"
  ) === "dark"
) {

  document.body.classList.add("dark");

}


// =========================================================
// INITIAL LOAD
// =========================================================

renderWeekNav();
renderHome();