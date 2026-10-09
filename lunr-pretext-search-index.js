var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "ns-reading",
  "level": "1",
  "url": "ns-reading.html",
  "type": "Subsection",
  "number": "1.1",
  "title": "Reading and Resources",
  "body": "Reading and Resources   Welcome to CS: Binary and Bits  Welcome to CS: Number Systems and Binary  Welcome to CS: Binary Conversions — Table Method  Welcome to CS: Hexadecimal Numbers  Optional video: Sesame Street Counting   "
},
{
  "id": "ns-decimal",
  "level": "1",
  "url": "ns-decimal.html",
  "type": "Subsection",
  "number": "1.2",
  "title": "Decimal Number System",
  "body": "Decimal Number System  Humans commonly use the decimal number system.  Fingers and toes illustrate one possible reason base ten became common.  Decimal is a base 10 number system. It uses ten symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 . Each position represents a power of 10.  Decimal Place Values Consider the number 2437 :  decimal number: 2 4 3 7 place values: 1000 100 10 1 10^3 10^2 10^1 10^0  .   Quick Review  How many symbols are used in decimal? 2 Binary uses two symbols. 10 Correct. The symbols are 0 through 9. 16 Hexadecimal uses 16 symbols.  In the decimal number 387 , what value does the digit 8 represent? 8 Remember the tens place. 80 Correct: 8 tens. 800 The hundreds digit is 3.  In the decimal number 29 , what value does the digit 9 represent? 9 ones.   "
},
{
  "id": "ns-fingers",
  "level": "2",
  "url": "ns-decimal.html#ns-fingers",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "Fingers and toes illustrate one possible reason base ten became common. "
},
{
  "id": "ns-decimal-5",
  "level": "2",
  "url": "ns-decimal.html#ns-decimal-5",
  "type": "Example",
  "number": "1.2.2",
  "title": "Decimal Place Values.",
  "body": "Decimal Place Values Consider the number 2437 :  decimal number: 2 4 3 7 place values: 1000 100 10 1 10^3 10^2 10^1 10^0  .  "
},
{
  "id": "ns-decimal-6-2",
  "level": "2",
  "url": "ns-decimal.html#ns-decimal-6-2",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "How many symbols are used in decimal? 2 Binary uses two symbols. 10 Correct. The symbols are 0 through 9. 16 Hexadecimal uses 16 symbols. "
},
{
  "id": "ns-decimal-6-3",
  "level": "2",
  "url": "ns-decimal.html#ns-decimal-6-3",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "In the decimal number 387 , what value does the digit 8 represent? 8 Remember the tens place. 80 Correct: 8 tens. 800 The hundreds digit is 3. "
},
{
  "id": "ns-decimal-6-4",
  "level": "2",
  "url": "ns-decimal.html#ns-decimal-6-4",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "In the decimal number 29 , what value does the digit 9 represent? 9 ones. "
},
{
  "id": "ns-binary",
  "level": "1",
  "url": "ns-binary.html",
  "type": "Subsection",
  "number": "1.3",
  "title": "Binary Number System",
  "body": "Binary Number System  The binary number system has two symbols, 0 and 1 . It is base 2; each position represents a power of 2.  binary number: 1 0 1 1 place values: 8 4 2 1 2^3 2^2 2^1 2^0  Therefore, 1011 binary is 8 + 2 + 1 = 11 decimal.  At the computer hardware level, two states such as electricity off\/on can represent binary values.  "
},
{
  "id": "ns-binary-to-decimal",
  "level": "1",
  "url": "ns-binary-to-decimal.html",
  "type": "Subsection",
  "number": "1.4",
  "title": "Converting Binary to Decimal (Place Values Method)",
  "body": "Converting Binary to Decimal (Place Values Method)  Write the binary place values below the digits. Start at 1 on the right and double as you move left. Add the place values beneath each 1. The sum is the decimal value.  Example A: 0110 1101 binary number: 0 1 1 0 1 1 0 1 place values: 128 64 32 16 8 4 2 1 0110 1101 binary = 64 + 32 + 8 + 4 + 1 = 109 decimal .  Example B: 1000 1010 binary number: 1 0 0 0 1 0 1 0 place values: 128 64 32 16 8 4 2 1 1000 1010 binary = 128 + 8 + 2 = 138 decimal .  We separate groups of four bits with spaces for readability: 10101010 becomes 1010 1010 .  Try It What decimal value is represented by binary 0100 1101 ? 69 Check whether you included the 8 place. 77 Correct: 64 + 8 + 4 + 1 = 77. 109 That is the value of 0110 1101.  "
},
{
  "id": "ns-binary-to-decimal-3",
  "level": "2",
  "url": "ns-binary-to-decimal.html#ns-binary-to-decimal-3",
  "type": "Example",
  "number": "1.4.1",
  "title": "Example A: 0110 1101.",
  "body": "Example A: 0110 1101 binary number: 0 1 1 0 1 1 0 1 place values: 128 64 32 16 8 4 2 1 0110 1101 binary = 64 + 32 + 8 + 4 + 1 = 109 decimal . "
},
{
  "id": "ns-binary-to-decimal-4",
  "level": "2",
  "url": "ns-binary-to-decimal.html#ns-binary-to-decimal-4",
  "type": "Example",
  "number": "1.4.2",
  "title": "Example B: 1000 1010.",
  "body": "Example B: 1000 1010 binary number: 1 0 0 0 1 0 1 0 place values: 128 64 32 16 8 4 2 1 1000 1010 binary = 128 + 8 + 2 = 138 decimal . "
},
{
  "id": "ns-binary-to-decimal-5",
  "level": "2",
  "url": "ns-binary-to-decimal.html#ns-binary-to-decimal-5",
  "type": "Remark",
  "number": "1.4.3",
  "title": "",
  "body": "We separate groups of four bits with spaces for readability: 10101010 becomes 1010 1010 . "
},
{
  "id": "ns-binary-to-decimal-6-2",
  "level": "2",
  "url": "ns-binary-to-decimal.html#ns-binary-to-decimal-6-2",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "What decimal value is represented by binary 0100 1101 ? 69 Check whether you included the 8 place. 77 Correct: 64 + 8 + 4 + 1 = 77. 109 That is the value of 0110 1101. "
},
{
  "id": "ns-decimal-to-binary",
  "level": "1",
  "url": "ns-decimal-to-binary.html",
  "type": "Subsection",
  "number": "1.5",
  "title": "Converting Decimal to Binary",
  "body": "Converting Decimal to Binary  Use the place-value subtraction method: Find the largest binary place value that can be subtracted from the decimal number. Subtract it and mark the position with 1. Repeat until the remainder is zero. Mark the unused positions with 0.  Convert 43 Decimal to Binary binary digits: 0 0 1 0 1 0 1 1 place values: 128 64 32 16 8 4 2 1 43 - 32 = 11 11 - 8 = 3 3 - 2 = 1 1 - 1 = 0 Thus, 43 decimal = 0010 1011 binary. Check: 32 + 8 + 2 + 1 = 43.  Convert 134 Decimal to Binary binary digits: 1 0 0 0 0 1 1 0 place values: 128 64 32 16 8 4 2 1 134 - 128 = 6 6 - 4 = 2 2 - 2 = 0 Thus, 134 decimal = 1000 0110 binary. Check: 128 + 4 + 2 = 134.  Binary Review  What is the missing binary place value in 128 64 32 16 ___ 4 2 1 ? 8 Correct: each place is twice the place to its right. 10 Binary place values are powers of two. 12 Halve 16 to find the next place.  What is the decimal value of 0100 binary? 2 Use the 8, 4, 2, 1 places. 4 Correct, the 4 place is set. 8 The 8 place is zero.   "
},
{
  "id": "ns-decimal-to-binary-4",
  "level": "2",
  "url": "ns-decimal-to-binary.html#ns-decimal-to-binary-4",
  "type": "Example",
  "number": "1.5.1",
  "title": "Convert 43 Decimal to Binary.",
  "body": "Convert 43 Decimal to Binary binary digits: 0 0 1 0 1 0 1 1 place values: 128 64 32 16 8 4 2 1 43 - 32 = 11 11 - 8 = 3 3 - 2 = 1 1 - 1 = 0 Thus, 43 decimal = 0010 1011 binary. Check: 32 + 8 + 2 + 1 = 43. "
},
{
  "id": "ns-decimal-to-binary-5",
  "level": "2",
  "url": "ns-decimal-to-binary.html#ns-decimal-to-binary-5",
  "type": "Example",
  "number": "1.5.2",
  "title": "Convert 134 Decimal to Binary.",
  "body": "Convert 134 Decimal to Binary binary digits: 1 0 0 0 0 1 1 0 place values: 128 64 32 16 8 4 2 1 134 - 128 = 6 6 - 4 = 2 2 - 2 = 0 Thus, 134 decimal = 1000 0110 binary. Check: 128 + 4 + 2 = 134. "
},
{
  "id": "ns-decimal-to-binary-6-2",
  "level": "2",
  "url": "ns-decimal-to-binary.html#ns-decimal-to-binary-6-2",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "What is the missing binary place value in 128 64 32 16 ___ 4 2 1 ? 8 Correct: each place is twice the place to its right. 10 Binary place values are powers of two. 12 Halve 16 to find the next place. "
},
{
  "id": "ns-decimal-to-binary-6-3",
  "level": "2",
  "url": "ns-decimal-to-binary.html#ns-decimal-to-binary-6-3",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "What is the decimal value of 0100 binary? 2 Use the 8, 4, 2, 1 places. 4 Correct, the 4 place is set. 8 The 8 place is zero. "
},
{
  "id": "ns-hex",
  "level": "1",
  "url": "ns-hex.html",
  "type": "Subsection",
  "number": "1.6",
  "title": "Hexadecimal Number System",
  "body": "Hexadecimal Number System  Hexadecimal (hex) is base 16. Its symbols are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F .  Decimal, Hexadecimal, and Four-Bit Binary Decimal Hex Binary  0 0 0000  1 1 0001  2 2 0010  3 3 0011  4 4 0100  5 5 0101  6 6 0110  7 7 0111  8 8 1000  9 9 1001  10 A 1010  11 B 1011  12 C 1100  13 D 1101  14 E 1110  15 F 1111   Hex positions are powers of 16, for example 4096, 256, 16, and 1.  hex number: 0 1 A 4 place values: 4096 256 16 1 16^3 16^2 16^1 16^0  "
},
{
  "id": "ns-hex-3",
  "level": "2",
  "url": "ns-hex.html#ns-hex-3",
  "type": "Table",
  "number": "1.6.1",
  "title": "Decimal, Hexadecimal, and Four-Bit Binary",
  "body": "Decimal, Hexadecimal, and Four-Bit Binary Decimal Hex Binary  0 0 0000  1 1 0001  2 2 0010  3 3 0011  4 4 0100  5 5 0101  6 6 0110  7 7 0111  8 8 1000  9 9 1001  10 A 1010  11 B 1011  12 C 1100  13 D 1101  14 E 1110  15 F 1111  "
},
{
  "id": "ns-hex-decimal",
  "level": "1",
  "url": "ns-hex-decimal.html",
  "type": "Subsection",
  "number": "1.7",
  "title": "Supplemental: Converting Hexadecimal to Decimal",
  "body": "Supplemental: Converting Hexadecimal to Decimal  This conversion is included from the original resource as enrichment; it is not part of the currently emphasized CC-01 conversion objectives.  Write hexadecimal place values starting with 1 on the right and multiplying by 16 toward the left. Convert letters to their numerical values (A=10 through F=15). Multiply each digit by its place value and add the results.  Example A: 6D hex number: 6 D place values: 16 1 6D hex = (6 x 16) + (13 x 1) = 109 decimal  Example B: 8A hex number: 8 A place values: 16 1 8A hex = (8 x 16) + (10 x 1) = 138 decimal  Example C: 23 hex number: 2 3 place values: 16 1 23 hex = (2 x 16) + (3 x 1) = 35 decimal A hexadecimal number does not need to contain any letters.  Hex Review What decimal number does the hex digit C represent? 10 A represents 10. 12 Correct: A=10, B=11, C=12. 16 Hex is base 16, but C is 12.  "
},
{
  "id": "ns-hex-decimal-4",
  "level": "2",
  "url": "ns-hex-decimal.html#ns-hex-decimal-4",
  "type": "Example",
  "number": "1.7.1",
  "title": "Example A: 6D.",
  "body": "Example A: 6D hex number: 6 D place values: 16 1 6D hex = (6 x 16) + (13 x 1) = 109 decimal "
},
{
  "id": "ns-hex-decimal-5",
  "level": "2",
  "url": "ns-hex-decimal.html#ns-hex-decimal-5",
  "type": "Example",
  "number": "1.7.2",
  "title": "Example B: 8A.",
  "body": "Example B: 8A hex number: 8 A place values: 16 1 8A hex = (8 x 16) + (10 x 1) = 138 decimal "
},
{
  "id": "ns-hex-decimal-6",
  "level": "2",
  "url": "ns-hex-decimal.html#ns-hex-decimal-6",
  "type": "Example",
  "number": "1.7.3",
  "title": "Example C: 23.",
  "body": "Example C: 23 hex number: 2 3 place values: 16 1 23 hex = (2 x 16) + (3 x 1) = 35 decimal A hexadecimal number does not need to contain any letters. "
},
{
  "id": "ns-hex-decimal-7-2",
  "level": "2",
  "url": "ns-hex-decimal.html#ns-hex-decimal-7-2",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "What decimal number does the hex digit C represent? 10 A represents 10. 12 Correct: A=10, B=11, C=12. 16 Hex is base 16, but C is 12. "
},
{
  "id": "ns-hex-binary",
  "level": "1",
  "url": "ns-hex-binary.html",
  "type": "Subsection",
  "number": "1.8",
  "title": "Hexadecimal and Binary",
  "body": "Hexadecimal and Binary  Hexadecimal is convenient shorthand for binary: one hexadecimal digit represents four binary digits (bits) . The four place values are 8 4 2 1 .  Hex to Binary Expand each hex digit into four bits, treating each group separately.  Convert 3A Hex to Binary 3A hex = 0011 1010 binary binary model: 8 4 2 1 8 4 2 1 binary digits:0 0 1 1 1 0 1 0 2 + 1 = 3, 8 + 2 = 10 (A)  Additional examples: B7 = 1011 0111 ; 6A = 0110 1010 ; 54 = 0101 0100 ; F2 = 1111 0010 .  Convert B7 hexadecimal to binary. 1011 0111 Correct: B = 1011 and 7 = 0111. 1100 0111 1100 is C, not B. 1011 1110 1110 is E, not 7.   Binary to Hex Divide binary digits into four-bit groups, then convert each group to one hex digit.  Convert 1011 1100 to Hex binary model: 8 4 2 1 8 4 2 1 binary digits:1 0 1 1 1 1 0 0 8 + 2 + 1 = 11 (B) 8 + 4 = 12 (C) Therefore 1011 1100 binary = BC hex.  Additional examples: 0101 0110 = 56 ; 0111 1011 = 7B ; 1101 1100 = DC ; 0001 1000 = 18 .  Hexadecimal is more compact than binary: B4 takes two hex digits rather than eight binary digits ( 1011 0100 ).  Convert 0111 1011 binary to hexadecimal. 7A The final group 1011 represents B. 7B Correct: 0111 = 7 and 1011 = B. 8B The first group 0111 equals 7, not 8.   "
},
{
  "id": "ns-hex-to-binary-3",
  "level": "2",
  "url": "ns-hex-binary.html#ns-hex-to-binary-3",
  "type": "Example",
  "number": "1.8.1",
  "title": "Convert 3A Hex to Binary.",
  "body": "Convert 3A Hex to Binary 3A hex = 0011 1010 binary binary model: 8 4 2 1 8 4 2 1 binary digits:0 0 1 1 1 0 1 0 2 + 1 = 3, 8 + 2 = 10 (A) "
},
{
  "id": "ns-hex-to-binary-5",
  "level": "2",
  "url": "ns-hex-binary.html#ns-hex-to-binary-5",
  "type": "Checkpoint",
  "number": "1.8.2",
  "title": "",
  "body": "Convert B7 hexadecimal to binary. 1011 0111 Correct: B = 1011 and 7 = 0111. 1100 0111 1100 is C, not B. 1011 1110 1110 is E, not 7. "
},
{
  "id": "ns-binary-to-hex-3",
  "level": "2",
  "url": "ns-hex-binary.html#ns-binary-to-hex-3",
  "type": "Example",
  "number": "1.8.3",
  "title": "Convert 1011 1100 to Hex.",
  "body": "Convert 1011 1100 to Hex binary model: 8 4 2 1 8 4 2 1 binary digits:1 0 1 1 1 1 0 0 8 + 2 + 1 = 11 (B) 8 + 4 = 12 (C) Therefore 1011 1100 binary = BC hex. "
},
{
  "id": "ns-binary-to-hex-5",
  "level": "2",
  "url": "ns-hex-binary.html#ns-binary-to-hex-5",
  "type": "Remark",
  "number": "1.8.4",
  "title": "",
  "body": "Hexadecimal is more compact than binary: B4 takes two hex digits rather than eight binary digits ( 1011 0100 ). "
},
{
  "id": "ns-binary-to-hex-6",
  "level": "2",
  "url": "ns-hex-binary.html#ns-binary-to-hex-6",
  "type": "Checkpoint",
  "number": "1.8.5",
  "title": "",
  "body": "Convert 0111 1011 binary to hexadecimal. 7A The final group 1011 represents B. 7B Correct: 0111 = 7 and 1011 = B. 8B The first group 0111 equals 7, not 8. "
},
{
  "id": "ns-check",
  "level": "1",
  "url": "ns-check.html",
  "type": "Subsection",
  "number": "1.9",
  "title": "Checking Your Work",
  "body": "Checking Your Work  Windows Calculator in Programmer mode displays decimal, hexadecimal, octal, and binary representations. Use it only to check a conversion after completing it yourself.  Windows Calculator in Programmer mode.  Open Calculator in Windows. Choose Programmer mode. Select DEC, HEX, or BIN. Enter your number and compare its representations.  "
},
{
  "id": "ns-calc",
  "level": "2",
  "url": "ns-check.html#ns-calc",
  "type": "Figure",
  "number": "1.9.1",
  "title": "",
  "body": "Windows Calculator in Programmer mode. "
},
{
  "id": "ns-real-world",
  "level": "1",
  "url": "ns-real-world.html",
  "type": "Subsection",
  "number": "1.10",
  "title": "Binary and Hexadecimal in Everyday Computing",
  "body": "Binary and Hexadecimal in Everyday Computing  RGB Colors  Graphics applications use red, green, and blue components, each in the decimal range 0 to 255, or hex 00 to FF .  Red Green Blue 00 to FF 00 to FF 00 to FF hex 0 to 255 0 to 255 0 to 255 decimal  HU Green has hex color #033621 : red 03 (3), green 36 (54), blue 21 (33).  See W3Schools Hexadecimal Colors .   Viewing File Contents in Hexadecimal  A hex editor shows the numeric codes stored in files. A single hex digit corresponds to four bits, making file data easier to inspect.  A text file could contain: A a 1B  Example text editor.  Some common text character codes are: space = 20 hex, A = 41 hex, carriage return = 0D , and line feed = 0A . (The source Markdown listed space as 32 hex; that has been corrected to 20 hex.)  Experiment with HexEd.it : create a small text file, open it, and compare the characters to their hex values.  Hex editor view.   "
},
{
  "id": "ns-editor",
  "level": "2",
  "url": "ns-real-world.html#ns-editor",
  "type": "Figure",
  "number": "1.10.1",
  "title": "",
  "body": "Example text editor. "
},
{
  "id": "ns-hexedit",
  "level": "2",
  "url": "ns-real-world.html#ns-hexedit",
  "type": "Figure",
  "number": "1.10.2",
  "title": "",
  "body": "Hex editor view. "
},
{
  "id": "ns-optional",
  "level": "1",
  "url": "ns-optional.html",
  "type": "Subsection",
  "number": "1.11",
  "title": "Optional Explorations",
  "body": "Optional Explorations  Alternate Method: Repeated Division  Divide the decimal number by the new base. Record the remainder. Divide the quotient by that base again. Repeat until the quotient is zero. Read the remainders from bottom to top.  This technique also works with bases 8 and 16 but is not required for CC-01.   Binary Arithmetic  Computers add and subtract binary numbers. Binary addition follows these rules:  0 + 0 = 0 0 + 1 = 1 1 + 0 = 1 1 + 1 = 10 (binary)  Addition example (5 + 3 = 8): 0101 + 0011 ------ 1000  Subtraction example (5 - 3 = 2): 0101 - 0011 ------ 0010  Binary arithmetic is not required for CC-01.   For Fun  There are 10 types of people in the world : those who understand binary and those who do not.  Binary Hopscotch — FoxTrot Binary Sudoku — FoxTrot 11 cheers for binary!   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
