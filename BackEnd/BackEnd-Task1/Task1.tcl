# Open Folder inside a variable 
set file [open input.txt]

# Read the file and insert each line at lines array 
set lines [split [read $file] "\n"]

# close the file 
close $file;  # Saves a few bytes



# Start With Checking the Lines Starts with Strings : 


puts "1- CHECK FOR LINES STARTING WITH STRINGS " 

set lineCounter 0
set report11 0
set report12 0

foreach line $lines {

  if {[regexp {[a-zA-Z]} [string index $line 0]]} {
      puts [format "Start with String : %s" $line] 
      incr report11

      if {$lineCounter == 0 } {
       set line1 $line
       incr lineCounter

      } elseif {$lineCounter == 1 } {
       set line2 $line
       incr lineCounter


      } elseif {$lineCounter == 2 } {
       set line3 $line
       incr lineCounter
      
      
      }


    } else {
         puts "INVALID LINE"
         incr report12
    }

}

puts [format "First Three line Start with Char : %s , %s , %s" $line1 $line2 $line3 ]
# We Can also use this for concatenation : set combined $line1$line2


puts "##########################################################################################"
puts "2- CHECK FOR LINES HAVING ODD OR EVEN INTEGER" 

set report21 0
set report22 0
set report23 0

set sumFirst 0
set checkSum 0

set maxNumber 0
set lineWithMax 0

set minString ''
set lineWithMin 0
set minStrLen 0

set checkMax  0



foreach line $lines {
  set checkNumbers 0
  incr checkMax
   
  foreach number [regexp -inline -all -- {\S+} $line] {
              if {[string is integer $number]} {

                    if {$maxNumber < $number} {
                      set maxNumber $number
                      set lineWithMax $checkMax

                    }

                  
                    incr checkNumbers
                    if { $checkSum < 2 } {
                     set sumFirst [expr $sumFirst + $number ]
                     incr checkSum
                    }
                    
                   if {$number%2 != 0 } {
                     puts [format "ODD NUMBER : %s"  [expr $number/2.0]]
                     incr report21
                     
                   } else {
                     puts [format "EVEN NUMBER : %s"  [expr $number*3.25]]
                     incr report22
                     
                   } 
              } else {

                  if {$minStrLen == 0} {
                  set minString $number
                  set minStrLen [string length $number]
                  set lineWithMin $checkMax
                  } elseif {$minStrLen > [string length $number]} {
                    set minString $number
                    set minStrLen [string length $number]
                    set lineWithMin $checkMax
                  }


                 


              }

  }

  if {$checkNumbers == 0 } {
    puts "INVALID LINE NO NUMBERS"
    incr report23
  }
    
}

puts [format "Line Of the Max Number (%s) is : %s" $maxNumber $lineWithMax]
puts [format "Line Of the First Minimum String (%s) is : %s" $minString $lineWithMin]
puts [format "Summation of the first 2 integer = %s " $sumFirst]

puts "##########################################################################################"
puts "3- Print All Lines with the Length of each line" 

set lineNumber 1
foreach line $lines {

 puts [format "%s - %s  : %s" $lineNumber $line [string length $line]]
 incr lineNumber

  
}

puts "##########################################################################################"
puts "4- Report" 

puts [format "Lines Start with String are %s and Without are %s " $report11 $report12 ]

puts [format "Number of Odd Numbers are %s and the Even numbers %s and Lines without any Number are %s" $report21 $report22 $report23 ]


