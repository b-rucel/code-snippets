<?php
class MyClass {
   public $message = 'Hello';

   public function MyClassFunction() {
       function innerFunction(&$this_thing, $message = null) {
          $this_thing->message = (!is_null($message)) ? $message : $this_thing->message;
          $this_thing->echo_something();
       }

       innerFunction($this); // echoes 'Hello'
       innerFunction($this, PHP_EOL.'New Message'); // echoes '\nNew Message'
   }
   
   public function echo_something() {
       echo $this->message;
   }
}

// $class = new MyClass;
// $class->MyClassFunction();
?>