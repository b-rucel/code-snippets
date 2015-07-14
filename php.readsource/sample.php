<?php
// PHP 5

// class definition
class Bear {
    // define properties
    public $name;
    public $weight;
    public $age;
    public $sex;
    public $colour;

    // constructor
    public function __construct() {
        $this->age = 0;
        $this->weight = 100;
    }

    // define methods
    public function eat($units) {
        echo $this->name." is eating ".$units." units of food... ";
        $this->weight += $units;
    }

    public function run() {
        echo $this->name." is running... ";
    }

    public function kill() {
        echo $this->name." is killing prey... ";
    }

    public function sleep() {
        echo $this->name." is sleeping... ";
    }
}

// extended class definition
class PolarBear extends Bear {

    // constructor
    public function __construct() {
        parent::__construct();
        $this->colour = "white";
        $this->weight = 600;
    }

    // define methods
    public function swim() {
        echo $this->name." is swimming... ";
    }
}

?>