$(window).load(function(){

    if ($("body").hasClass("product")){
        $("body, .product").append('<div class="rodapeProdutoFixed"></div>')
        $(".rodapeProdutoFixed").css({
                         "background-color": "white",
                         "position" : "fixed",
                         "z-index": "99999",
                         "bottom": "0",
                         "right": "0",
                         "width": "100%",
                         "padding":"15px",
                         "height" : "100px",
                         "box-shadow": "0px 0px 5px 0 grey"
                        });
        
        var textoBotaoRodape = 'Adicionar &agrave Sacola';
        $(".rodapeProdutoFixed").append('<div class="product_buy-button"><button class="botaoAdicionarRodape button button--buy button--full product_add-to-cart active" href="javascript:;">'+ textoBotaoRodape + '</button></div>');

        $(".rodapeProdutoFixed .product_buy-button .button--full, .swal-footer .swal-button").css({
            "width": "350px",
            "display": "block",
            "float": "right",
            "top" : "15px"
        });
        

        var imagemProduto = $(".product__image").attr('src');
        var valorTotalProdutoRodape = $(".skuBestPrice").text().replace("R$",'').replace(".",'');
        var valorTotalProdutoRodapeInt = parseFloat(valorTotalProdutoRodape)
        var valorDescontoProdutoRodape = (valorTotalProdutoRodapeInt * 0.9);
        

        $(".rodapeProdutoFixed").append('<div class="imageRodape"><img class="imageRodape product__image"src=' + imagemProduto + '><div class="valorTotalProdutoRodape"><p class="product__name productNameRodape">' + $(".productName").text() + '</p><p>Pre&ccedilo: ' + valorTotalProdutoRodapeInt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + '</p><p>Pre&ccedilo com desconto: ' + valorDescontoProdutoRodape.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + '<p></div></div>');
        
        $(".rodapeProdutoFixed").append('<div class="botaoFexarRodape">X<div>');

        $(".imageRodape").css({
            "max-width": "50px",
            "float": "left"
        });

        $(".valorTotalProdutoRodape").css({
            "width": "500px",
            "margin-left": "55px",
        })
        $(".productNameRodape").css({
            "font-family": "Futura , Helvetica , Arial , sans-serif , Apple Color Emoji , Segoe UI Emoji , Segoe UI Symbol",
            "font-size": "15px",
            "font-weight": "normal",
            "line-height": "20px",
            "text-align": "left",
            "text-transform": "uppercase", 
            "padding-bottom": "5px"
        })

        $(".botaoFexarRodape").css({

            "display": "block",
            "float": "right",
            "margin": "-10px",
            "margin-right": "-350px",
            "cursor":"pointer"

        })
        $(".botaoFexarRodape").click(function() {
            $(".rodapeProdutoFixed").toggle();
            
        });


       $(".botaoAdicionarRodape").click(function () {
        $(this).empty();
        $(this).append('<span class="spinner-load"><span class="bounce1"></span><span class="bounce2"></span><span class="bounce3"></span></span>')
        setTimeout(() => { 
            $(this).text("Produto Adicionado!");
            setTimeout(() => { 
                $(this).empty();
                $(this).append('<span>'+ textoBotaoRodape +'</span>');
            }, 1500);
        }, 1000);
        });

    }


});