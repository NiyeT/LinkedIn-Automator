# LinkedIn-Automator
Automatically send invitations to your LinkedIn suggestions using criteria specified by you.

# Installation

Clone the repository.

````sh
git clone https://github.com/NiyeT/LinkedIn-Automator.git
````

# Usage

• Navigate inside of the LinkedIn-Automator directory open either automator.min.js or automator.js in a text editor.
  -automator.min.js for best execution time.
  -automator.js for clarity and/or modification purposes.

• Change the values located in the array "my_key_terms" to terms you'd like your LikedIn invitation recipients to have in their bio.

````javascript
const my_key_terms=["New York","ninja","hard working","Software","Engineer"];
````

• Copy the contents of automator file you're editing.

• Sign into your LinkedIn account.

• Navigate to your LinkedIn network page.
 -https://linkedin.com/mynetwork

• Open Developer Tools and paste the automator file.
  • Developer tools.
    -OS X: ⌥⌘U
    -Linux: CTRL+U
    -Windows: CTRL + U
    -Try googling how to open developer tools with your browser if none of these work.

• Press Enter to begin start the automator.

• Type this command and press enter in developer tools at any time to stop the automator.

````javascript
linkedInAutomator.stop();
````
