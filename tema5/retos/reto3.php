<?php
//Para evitar que los warning salgan en la pantalla y se traten como texto JSON
error_reporting(0);
$datos = [
    "Colores" =>[
        "color1" =>[
            'esp'=>'rojo',
            'ing'=>'red',
            'img'=> "🔴"
        ],
        "color2" =>[
            'esp'=>'amarillo',
            'ing'=>'yellow',
            'img'=> "🟡"
        ],
        "color3" =>[
            'esp'=>'verde',
            'ing'=>'green',
            'img'=>"🟢"
        ]

    ], "Animales" => [
        "animal1" =>[
            'esp'=>'perro',
            'ing'=>'dog',
            'img'=>"🐶"
        ],
        "animal2" =>[
            'esp'=>'gato',
            'ing'=>'cat',
            'img'=>'🐱'
        ],
        "animal3" =>[
            'esp'=>'caballo',
            'ing'=>'horse',
            'img'=>'🐎'
        ]
    ], "Ropa" => [
        "ropa1" =>[
            'esp'=>'vaqueros',
            'ing'=>'jeans',
            'img'=>'👖'
        ],
        "ropa2" =>[
            'esp'=>'zapatos',
            'ing'=>'shoes',
            'img'=>'👞'
        ],
        "ropa3" =>[
            'esp'=>'gorro',
            'ing'=>'hat',
            'img'=>'🎩'
        ]
    ]
];

//Tomamos el valor del input procedente de la URL
$nombre = $_REQUEST["nombre"];

echo json_encode($datos[$nombre]);
?>
