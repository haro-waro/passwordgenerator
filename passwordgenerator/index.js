const passwordbox = document.getElementById("password")

const length = 12;

const uppercase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";

const lowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z" 

const number  = "1 2 3 4 5 6 7 8 9 0"

const symbol = "! @ # $ % ^ & ( ) _ [ ] { } ; : '  , . ? \ | ` ~"

const allchars  = uppercase +lowercase +number + symbol


function createpassword () {
    let password  =""

    password += uppercase[Math.floor(Math.random() * uppercase.length) ]
     password += uppercase[Math.floor(Math.random() * lowercase.length) ]
      password += uppercase[Math.floor(Math.random() * number.length) ]
       password += uppercase[Math.floor(Math.random() * symbol.length) ]

       while (length > password.length) {
             password += allchars[Math.floor(Math.random() * allchars.length)]
       }

       passwordbox.value = password
}

