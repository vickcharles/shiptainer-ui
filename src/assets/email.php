<?php
header('Content-type: application/json');
$errors = '';
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$from_name = $request->name;
	$from_email = $request->email;
	$from_country = $request->country;
	$from_phone = $request->phone;
	$from_message = $request->message;


	    $sql = <<<SQL
		INSERT INTO  `econtain_shiptainer`.`formulario` (
		`id` ,
		`name` ,
		`email` ,
		`country` ,
		`phone` ,
		`message` ,
		)
		VALUES (
		NULL ,  '$from_name',  '$from_email',  '$from_country',  '$from_phone',  '$from_message'
		);
SQL;
$hostname = 'localhost';
    $username = 'econtain_shiptainer';
    $password = 'mercadeo2019';
    $dbname = 'econtain_shiptainer';
    mysql_connect($hostname, $username, $password) OR DIE('Unable to connect to database! Please try again later.');
    mysql_select_db($dbname);
    mysql_query($sql);
	

    $email_from = "jrozo@econtainers.co";
		$email_to = "a.vila@shiptainer.com";
		$email_subject = "Nuevo Lead pagina web shiptainer: ";
		$email_message = "Nuevo contacto:\n\n";
		$email_message .= "Nombre: " . $from_name . "\n\n";
		$email_message .= "Email: " . $from_email . "\n\n";
		$email_message .= "Pais: " . $from_country . "\n\n";
		$email_message .= "Telefono: " . $from_phone . "\n\n";
		$email_message .= "Mensaje: " . $from_message . "\n\n";
	//Ahora se env铆a el e-mail usando la funci贸n mail() de PHP
		$headers = 'From: '.$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);
		
	

function StripHtml( $fStringData = NULL )
{
	if( is_null( $fStringData ) && "" != $fStringData ){
		return FALSE;
	}
	$fStringData = trim( $fStringData );
	//quita tags tipo sql y html
	$fStringData = strip_tags( $fStringData );
	$fStringData = str_replace( "from", "", $fStringData );
	$fStringData = str_replace( "FROM", "", $fStringData );
	$fStringData = str_replace( "database", "", $fStringData );
	$fStringData = str_replace( "DATABASE", "", $fStringData );
	$fStringData = str_replace( "select", "", $fStringData );
	$fStringData = str_replace( "SELECT", "", $fStringData );
	$fStringData = str_replace( "delete", "", $fStringData );
	$fStringData = str_replace( "DELETE", "", $fStringData );
	$fStringData = str_replace( "update", "", $fStringData );
	$fStringData = str_replace( "UPDATE", "", $fStringData );
	$fStringData = str_replace( "table", "", $fStringData );
	$fStringData = str_replace( "TABLE", "", $fStringData );
	$fStringData = str_replace( "insert", "", $fStringData );
	$fStringData = str_replace( "INSERT", "", $fStringData );
	$fStringData = str_replace( "drop", "", $fStringData );
	$fStringData = str_replace( "DROP", "", $fStringData );
	$fStringData = str_replace( "create", "", $fStringData );
	$fStringData = str_replace( "CREATE", "", $fStringData );
	$fStringData = str_replace( "truncate", "", $fStringData );
	$fStringData = str_replace( "TRUNCATE", "", $fStringData );
	$fStringData = str_replace( "alter", "", $fStringData );
	$fStringData = str_replace( "ALTER", "", $fStringData );
	$fStringData = str_replace( "';", "", $fStringData );
	$fStringData = str_replace( "' ;", "", $fStringData );
	$fStringData = str_replace( "php", "", $fStringData );
	$fStringData = str_replace( "PHP", "", $fStringData );
	$fStringData = str_replace( "cookies", "", $fStringData );
	$fStringData = str_replace( "COOKIES", "", $fStringData );
	$fStringData = str_replace( "HTTP", "", $fStringData );
	$fStringData = str_replace( "HTTPS", "", $fStringData );
	$fStringData = rawurldecode($fStringData);
	return $fStringData;
}
?>
