<!DOCTYPE html>
<html lang="en">

   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <title>Express</title>
      <!-- Bootstrap -->
    <link href="./css/catalog.css" rel="stylesheet">
    <link href="./imagenes/default/favicon.ico" rel="shortcut icon">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="./css/_header.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="./css/custom_css.css"	media="screen" />
	<link rel="stylesheet" type="text/css" href="./css/custom.css"	media="screen" />
	<link rel="stylesheet" type="text/css" href="./css/footer.css"	media="screen" />
	<link rel="stylesheet" type="text/css" href="./css/mediasFooter.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="./css/carrusel.css" media="screen" />
      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]--> 
   </head>
<body>
<div class="container">
<div class="row">
	<div class="col-xs-12"> 
		<ul class="navegacion">
			<li><a href="#">Mujeres</a></li>
			<li>/</li>
			<li><span style="color:black;">Supertendencias para mujeres</span></li>
		</ul> 
	</div>

	<div class="col-md-6">
		<h1>Supertendencias para mujeres</h1>
	</div>

	<div class="col-md-6">
		<ul class="numbers header-nav-position">
			<li><em>1</em></li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
		</ul>
	</div>
</div>

<div class="row">
	<div class="col-md-6">
		<div class="dropdown">
				Ordenar por
				<span class="caret"></span>
					<ul style="display:none;">
						<li class="selected" data-value="relevance">
							<a class="fliter" href="#">Destacado</a>
						</li>
					</ul>
		</div>
	</div>
	<div class="col-md-6">
		<ul class="search-filters mobile-four">
            <li class="search-option-all"><a href="javascript:void(0);" data-show-filter="all" class="show-filter">Todos los filtrados</a>
            <span class="caret"></span>
            </li>
            <li class="browse-dropdown"><a href="javascript:void(0);" data-show-filter="type" class="show-filter">Tipo</a><span class="caret"></span></li>
            <li class="browse-dropdown"><a href="javascript:void(0);" data-show-filter="size" class="show-filter">Tamaño</a><span class="caret"></span></li>
            <li class="browse-dropdown"><a href="javascript:void(0);" data-show-filter="color" class="show-filter">Color</a><span class="caret"></span></li>
            <li class="browse-dropdown"><a href="javascript:void(0);" data-show-filter="availability" class="show-filter">Disponibilidad</a>
            <span class="caret"></span></li>
        </ul>
	</div>
</div>





<div class="row">
<div class="col-xs-5 col-sm-5 col-md-5">
	<img class="img-responsive" src="imagenes/catalog/índice.jpg">
	
	<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5"> 
	<img class="img-responsive" src="imagenes/catalog/2.jpg">
	<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"> 2 colors</span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5"> 
	<img class="img-responsive" src="imagenes/catalog/83_821.jpg">

	<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5"> 
	<img class="img-responsive" src="imagenes/catalog/74_792.jpg">

	<ul class="product-info">
		<li class="price">
			<span class="regular-price">$69.90</span>
			<span class="discount">$35.94</span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>

		<li class="promo">
		<font style="font-weight:normal" color="BLACK">Now 40% Off!</font><br>
		<font style="font-weight:normal" color="BLACK">Price Reflects Discount</font>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5">
	<img class="img-responsive" src="imagenes/catalog/74_936.jpg"> 

	<ul class="product-info">
		<li class="price">
			<span class="regular-price">$69.90</span>
			<span class="discount">$35.94</span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>

		<li class="promo">
		<font style="font-weight:normal" color="BLACK">Now 40% Off!</font><br>
		<font style="font-weight:normal" color="BLACK">Price Reflects Discount</font>
		</li>
	</ul>
</div>

<!--        2             -->
<div class="col-xs-5 col-sm-5 col-md-5">
	<img class="img-responsive" src="imagenes/catalog/86_630.jpg">

		<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5"> 
	<img class="img-responsive" src="imagenes/catalog/74_234.jpg">

		<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5"> 
	<img class="img-responsive" src="imagenes/catalog/83_737.jpg">

		<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5"> 
	<img class="img-responsive" src="imagenes/catalog/74_933.jpg">

		<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

<div class="col-xs-5 col-sm-5 col-md-5">
	<img class="img-responsive" src="imagenes/catalog/87_870.jpg"> 

		<ul class="product-info">
		<li class="price">
			<span>$69.90</span>
			<span class="discount"></span>
			<span class="colors"></span>
		</li>
		<li class="description">
			<a href="#">one shoulder belted asymmetrical maxi dress</a>
		</li>
	</ul>
</div>

</div> <!-- Cierre de class row-->

<div id="description-seo" style="display:block";>
	<div class="row">
		<div class="col-xs-12">
			<h2>NUEVAS TENDENCIAS PARA MUJERES</h2>
				<p>
					Si te consideras un seguidor de la moda,que siempre esta al tanto de las tendencias y los estilos mas nuevos. Nunca ha sido mas facil permanencer en la tendencia con nuestros productos recien llegados; Express ofrece las piezas mas nuevas, todo a tu alcance. Perfectamente en punto, tenemos de todo, desde
					<a href="#">vestidos</a> hasta <a href="#">faldas</a>.Todos los elementos esenciales estan en nuestros productos recien llegados y esperando para que te los lleves a casa. Con volantes, aberturas laterales, con escotes en V, tapas recortadas, estaras en perfecta sincrnia con toda la moda que te gusta. Con todos los estilos que necesitas para verte de la mejor manera, tenemos todo lo que siempre has querido.
				</p>
		</div>
	</div>
</div>
</div>
</body>
</html>