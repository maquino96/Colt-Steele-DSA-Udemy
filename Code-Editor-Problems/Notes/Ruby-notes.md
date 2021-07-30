Object-oriented programming (scripting) language
Focusing on the programmer over the machine

Matz Ruby Interpreter
Utilizes a garbage collector

Ruby on Rails (web app framework), popularity.
Github, Twitch, Hulu

# printing
puts Hello
print World
p !!

#declaring variables
	Convention: start with a lowercase word, continue snake casing
	letters, numbers, _

name  = “Matt” ##String
age = 24 ##Int
gpa = 3.5 ##Decimal
is_tall = false ##boolean

# String interpolation

puts “Your name is #{name}” ##note the double quotes and use of #{}
puts “Your name is “ + name

3.14.to_i #to integer
3.to_f #to float
“3.0”.to_s #to string

# Strings

greeting = “Hello”
	greeting.length >> 5
	greeting[0] >> ‘H’
	greeting.include? “llo” >> true
	greeting[1,3] >> “ell” inclusive start and end 

num = -25.6
	num.abs() >> 25.6
	num.round() >> -26

Math.sqrt(144) >> 12
Math.log(0) >> Infinity

gets.chomp ## special key word that waits for user input .chomp is used to keep the input on the same line as gets alone has a new line character

# Arrays
-Can store multiple types of data in an array
array[i,j] grabs j elements starting at index i, inclusive
array[a..b] will grab all elements in that specified index range, inclusive

multi-dimensional array, nested 

array.push()
array.pop
array.reverse
array.sort ## strings alphabetical, integers numerically
array.include?

def name_of_method( par1, par2=default_value)
return value
end 

bool1 = true
bool2 = true

if  bool1 and bool2
	puts ‘This is true’
elseif bool1 and !bool2
	puts ‘This will not run’
else
	puts ‘back to conditionals’
end

== #comparison operator
#search up switch statements 

my_grade = “A” ##update this value to various cases
case my_grade 
	when “A”
		puts “You passed!!”
	when “F” 
		puts “You fail”
	else 
		puts “Invalid grade”
end 

#hashes aka dictionaries (store key: value pairs)
various ways to input keys (strings, :symbols, numbers)

test_grades = {
“Andy” => “B+”,
:Stanley => “A”,
“Ryan” => “C”,
3 => 95.23
}

#updating a hash
test_grades[:Stanley] = “A+”

test_grades[3] >> 95.23 ##note that the KEY is what is inputted into the brackets not INDEX

 #Loops

index = 1

while index <= 5
	puts index
	index+=1
end

for element in 0..5
	puts element
end

5.times do |element|
	puts element
end 

lucky_nums = [ 7, 11, 9, 23, 34, 35]
for element in lucky_nums
	puts element
end

lucky_nums.each do |el|
	puts el
end

#exception catching

begin 
num = 10/0
rescue
	puts = ‘error’ #this code will run instead if the code in begin has an error
end


begin 
num= 10/0
rescue ZeroDivisionError #Meant to only catch errors caused when dividing by 0
puts “Zero dividing error”
rescue
puts “Some other type of error has occurred”
end
	
raise “Made Up Exception” ### keyword that throws up a custom exception

#Everything is an object in Ruby

class Book
	### getter and setter methods (OOP concept)
	attr_accessor :title, :author ###attr_accessor allows you to read AND write the var

	def initialize(title, author) # initializer, special method called when an instance is created
		@title = title
		@author = author
	end 

	def readBook()
		puts “Reading #{self.title} by #{self.author}”
end
end

book1 = Book.new() #creates a new instance of the Book class
book1.title = “Harry Potter”
book1.author = “JK Rowling”

# book1 = Book.new(‘Harry Potter’, ‘JK Rowling’) 

book1.readBook()
puts book1.title


#Inheritance 
# Subclass inherits from the superclass
	##e.g. can inherit the properties and methods of a superclass

class Chef
	##Insert properties and methods here
end

class ItalianChef < Chef
	###can override existing methods with it’s own
	###can also override the initializer to insert new properties
end









