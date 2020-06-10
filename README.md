# _Pig Latin_
#### _This tool will translate any sentence into pig latin, 6/10/2020_
#### By _**Kyle Hubbard, Matt McFarland**_
## Description
_This site will contain an input in which users can enter the text they wish to have translated and will then view the translation in an output section_

### Specifications
* The program does nothing to non-alphabetical characters because they do not contain consonants or vowels
  - Input: 3
  - Output: 3
  - Complete: True
* The program adds "way" to single letter words beginning with a vowel
  - Input: i
  - Output: iway
  - Complete: True
* The program adds "way" to multi-letter words beginning with a vowel
  - Input: angle
  - Output: angleway
  - Complete: True
* The program moves the first letter of a word to the end for words beginning with a consonant or "y" and adds "ay" to the very end
  - Input: car
  - Output: arcay
  - Complete: True
* For words beginning with two or more consonants, move all of the first consecutive consonants to the end, and add "ay"
  - Input: translator
  - Output: anslatortray
  - Complete: True
* words starting with "qu" will move both letters to the end and add "ay" 
  - Input: quiet
  - Output: ietquay
  - Complete: True
* words with a consonant before "qu" will travel with "qu" to the end of the word and have "ay" added to the end
  - Input: squeal
  - Output: ealsquay
  - Complete: True
* Words captitalizations are preserved
  - Input: Apple
  - Output: Appleway
  - Input: Translator
  - Output: anslatorTray
  - Complete: False
* Sentence structure in the output will reflect the user's input
  - Input: I love you
  - Output: Iway ovelay ouyay
  - Complete: False
* Words and sentences will retain the proper placing of special characters such as "," or "!" 
  - Input: Apples, oranges, bananas!
  - Output: Applesway, orangesway, ananasbay!
  - Complete: False


## Setup/Installation Requirements
#### Requirements
* _GitBash or a preferred computer terminal_
* _Web browser_
* _Optional: code editor - suggested VSCode-_
#### Install
* _Navigate to my github repository at: https://github.com/hubba180/pig-latin_
* _click the green clone or download button and copy the ".git" link_
* _Click the green clone or download button and copy the ".git" link_
* _On your homescreen open up your preferred terminal - GitBash recommended - and clone the file to your desktop. If your using GitBash the command is $ git clone {insert url}_
* _Navigate into the newly cloned folder and open index.html in any web browser_
* _to view code with GitBash: use $ code ._
* _To view code with GitBash: use $ code ._
## Known Bugs
_No known bugs_
## Support and contact details
_Kyle Hubbard:_
kyle.james.hubbard@gmail.com

_Matt McFarland_
mrmcfarland@gmail.com

## Technologies Used
* HTML
* Bootstrap version 3.3.7
* Javascript
* JQuery version 3.5.1
* CSS
* Git
### License
MIT - Liscense
Copyright (c) 2020 