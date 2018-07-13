AOS.init({
    duration: 1200
});


jQuery(document).ready(function ($) {
    var current, size;
    $('.certificates__item').click(function (e) {
        e.preventDefault();
        var image_href = $(this).attr("href");
        var slideNum = $('.certificates__item').index(this);
        if ($('.lightbox').length > 0) {
            $('.lightbox').fadeIn(300);
        } else {
            var lightbox =
                '<div class="lightbox">' +
                '<div class="lightbox__slider">' +
                '</div>' +
                '</div>';
            $('body').append(lightbox);

            $('.certificates__items').find('.certificates__item').each(function () {
                var $href = $(this).attr('href');
                $('.lightbox__slider').append(
                    '<img src="' + $href + '" class="lightbox__image">'
                );
            });
        }
        size = $('.lightbox__slider img').length;
        $('.lightbox__slider img').hide();
        $('.lightbox__slider img:eq(' + slideNum + ')').show();
        current = slideNum;
    });

    $('body').on('click', '.lightbox', function () {
        $('.lightbox').fadeOut(300);
    });
});


console.log(`%c
< Ну здарова >
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEWKEGjtiijDEKKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEKt..:::::::::,::...,DWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEK,.::::::::::::;::::::: jKEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEKt.:::::::::::::::;:::::::;::.:KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEWL.:::::::::::::::::,::::::::::::.fWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEEWf:::::,:::::::,:::::::::::::::,::::;;;KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEEK.::::::,:::::::,:::::::.,ffLf;.::::::;;:DEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEEi.:::::::,:::::::::::.,K#Gt:...;L:::::::;;;:KEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEEEL::::::::::::::::::::.K#i.::::::::::::::::;;;:fEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEEK :;::::::::::::,::::.WE :::..:tLGEEGLt:.::::;;;;:KEEEEEEEEEEEEEEEEEEEEEEEEEEE
EEEEEEEEEEEEEEEEEEEEEKi::;:::::::::::::,:::Di.::.iD#WEGfttfLEWWj.::;;;;;:WEEEEEEEEEEEEEEEEEEEEEEEEEE
WWWWWWWWWWWWEEEEEEEEE::::;::::;::::::::,::::::jWG,..::::::,;;;,;EG.,;;;;;,EWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWEEEEEEEEGW ::,::::;::::::::;:::: LK;::::::::::::;;;;,KD:;;;;;;iWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWEEEEEEEf:;j:::::::;::::::::::::.W,::::::::::::::..;tLEK;,;;;;;:WtWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWEEEEEEEK.::::::::::;:::::::::::.W.:::::::::::..;fK#WDL; E.;;;;;,#tKWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWEEEEEEK,::::::::::::::::::::::.W.::::::..tLW#Dj:    ::::#.;;;;;;#tffWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWE,::::..,GEWWEG..::::::::L::..tG##Ej.          ::::W,:;;;;;WjtfEWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWK.:..fK#KGj;;iL#E.:::::: W,fEKE#              .:::.W.:;;;;;WLtfjWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWE;:L#G..::,;;;;;;:W,:::::;E#W####              ::::if,:,;;;;Wfttfj#WWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWD;#G ::::::::;;;;;GW:::::;K  ###L             .::: W:,::;;;;#jttffEWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWEWt:::::::::::::;LE#E.;:::.K####t             :::: W,;:::;;;;#ttttfjKWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWEW.:::::::::. ifW#Li D.;::::GiKK,             ::::t#:;;:;:;;;;#ttttjfjWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWEL.::::::..fK#D,   ::.E.;::::.#i:::.       .:::: .#t:;;,::,;;;,#ittttffWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWW.::::.:tK#G,      :: W.,::::::W; :::::::::::: .E#;;;;;:::;,;;,#ittttjffWWWWWWWWWWWWWWWW
WWWWWWWWWWWK.:::jW#t           ::iK:::::::::jKKj:      ,LKKL:;;;;;:::::,;;:WttttttffEWWWWWWWWWWWWWWW
WWWWWWWWWWEL.iDED.            :::Kt:::::::,:;:tGW#WWKW#WLt:;;;;,i:::::::;;:WtttttttfjWWWWWWWWWWWWWWW
WWWWWWWWWWELK###             :::.G::::::::;::;;;;;,,,,,;;;;;;;;;;:::::::;;:Dtttttttff#WWWWWWWWWWWWWW
WWWWWWWWWED#D###             :: W:::::::::;::,;;;;;,;;;;;;;;;;,:,:::::::;;;LtttttttffKWWWWWWWWWWWWWW
WWWWWWWWWE#  ##j           ::: W,:::::::::::::;;;;;j;;;;;;,::::::::::,::;;fjtttttttjffWWWWWWWWWWWWWW
WWWWWWWWWE#####           :::.W,;:::::::::::::,;;;;:.:::,::::::::::::;::;;Gtttttttttfj#WWWWWWWWWWWWW
WWWWWWWWWE ;K,         .::: ED:;;:::::,::::::::;;,;;#.::;::::::::::::;::;,DittttttttffEWWWWWWWWWWWWW
WWWWWWWW#iW ::::::::::::.iKD:;;t:::::::,::::::::,t;;iE::,:::::,:::::::;:;,KittttttttjffWWWWWWWWWWWWW
WWWWWWWWDjKW .:::::::. ;DWj,;;;f:::::::;::::::::;i,;:#::::::::;:::::::::;,WittttttttjfjWWWWWWWWWWWWW
WWWWWWWWitjiE#KGffLDK#Et:;;;;,:t::::::::::::,:::;,;;;f.:::::::;:::::::::;:#ittttttttjfjWWWWWWWWWWWWW
WWWWWWW#ttttE.;fLLLfi:,;;;;;,,.;::::::::::::;:::,,;;;;f:::::::::::::::::;:#ittttttttjfjWWWWWWWWWWWWW
WWWWWW#ittttK:;;,;;;;;i;;;;;::,::;:::::::::::;:::;;;;,W ::::::::::::::::;:Wittttttttjff#WWWWWWWWWWWW
WWWWWWEtttttK.;;;;;;;;i;;;,::,i::;:::::::::::;:::;;;;;W;:::::::::::,:::,;,Wittttttttjff#WWWWWWWWWWWW
WWWWWWitttttE.::,,,;;;i: Gj:::L.:;:::::::::::::::,;;;;jE:.#Wf :::::;:::,;,Dittttttttjff#WWWWWWWWWWWW
WWWWW#ttttttG.:,,:::::;.KG::::G.:;:::,::::,:::::::;;;;,#::.,EW:::::;:::,;,Gtttttttttjfj#WWWWWWWWWWWW
WWWWWKttttttf;::,:::::iE ::::.E.:::::;::::;:::::::;;;;:K.::::ii::::,:::;;;jjttttttttffjWWWWWWWWWWWWW
WWWWWLtttttttG:::::::.W :::::.K.:::::,::::,:::::::;;;;;L.:,L:.G::::::::;;;;LttttttttfftWWWWWWWWWWWWW
WWWW#itttttttW.::::::EiW.::::.W.::::::::::.:iLDDGLf;:,;jfWL :.D::::::::,t;:KtttttttjfffKKKKKKKKKKKKK
DDDDEttttttttEt:::,::#.t# :::.W.:::::::: t##WKGGDEW##K,;E,:::,t:::::::,;i;,#ittttttfffEEEEEEEEEEEEEE
EEEWjtttttttttW:::,::W.:.KK :.K.::::::t#KfitttttttffjjD#i:::.W.:::::::,;;,;KDtttttjffjWEEEEEEEEEEEEE
EEEWitttttttttGi::,::D:::: E#jD.:::: #LittttttttttfffffL;::.#.::::::::;;,i;:#tfffffff#EEEEEEEEEEEEEE
EEEWttttttttttjW ::::t:::::.:EK.::::#fjtjjjtttttttfffffD,:::.::,::::::;;;,;;tKjfffffLEEEEEEEEEEEEEEE
EEE#ttttttttttfLW:::::::::::::t:::;Wittt,,,ittttttffffjK :::::::,::.j#W,;;;;;f#fjjt#EjEEEEEEEEEEEEEE
EEE#tttttttttjfjE:::::::::::::,t::#ittj:,,,ittttttffffj#.:::::::,::jW.:W:;;;;;;##W#L:,DEEEEEEEEEEEEE
EEE#ttttttttjjjffjjtii;;ittjjfffLjittti,,,,jttttttfffff#::;:::::;:.# :::#;;;;;;;::,;;;,WEEEEEEEEEEEE
EEEWttttttfft,..:;ijjjjjjtttti;::jjtttj:,,jtttttttffffDE::,:::::::.D.::;t,;;;;;;;;;;;;;jEEEEEEEEEEEE
EEEWjjtttj. jffjjjjjjjjjjjjfji,.,;jtttttjttttttttjffff#:::,:::::::.f:::;;;;;;;;;;;;;;;;;WEEEEEEEEEEE
EEEWjftttj,,    ::;iiii;,:..:,;;;,fttttttttttttttfffftW.::,::::::::f:::;;;;;;;;;;;;;;;;;iKEEEEEEEEEE
EEEEEffttj,;..,;;;;;;;;;;;;;;;;;;,jtttttttttttttjfjDjK ::::::::::::j:::;;;;;;;;;;;;;;;;;;tEEEEEEEEEE
EEEE#jffjj,;..,;;;;;;;;;;;;;;;;;;,jtttttttttttttfj#WD#::::::::::::,t:::;;;;;;;;;;;;;;;;;;:EEEEEEEEEE
EEEEWEfffj,;..:;;;;;;;;;;;;;;;;;;;ttttttttttttttj#WW#,::::::::::::i:::,;;:;;;;;;;i,;;;;;;;LEEEEEEEEE
EEEEW#jffj,;...;;;;;;;;;;;;;;;;;;;ttttftjttttttfj#WWL::::::::;::::f.::,,,:,;;;;;;;;;;;;;;;:WEEEEEEEE
EEEEEW#tfj;;:..;;;;;;;;;;;;;;;;;;;t#L#WWWtttttfffLKK:::::::::,:::.E.::;tE::;;;;;;,i;;;;;;;;iEEEEEEEE
EEEEEEW#jji;,..;;;;;;;;;;;;,;;;;;,j:#WWWWftttjfftKE :::::::::,:::.W.::;fD::,;;;;;;;,;;;;;i;:EEEEEEEE
EEEEEEEEW#j,;::,,,,,,,,,,,WW#f:,,,f::i#W#ittjjGW#,::::;:::::::::::#::,;Lf:::,;;;;;,,;;;;;,,;EEEEEEEE
EEEEEEEEEEj;,   ,,,,,,,,,W,::,Wfi;f:::: fD##EG, ::::::;::::::::::jD::;;K;:,::;;;;;;;;;;;;,;;,KEEEEEE
EEEEEEEEEEjj;   ,,,,,,,,,Ki::: WGji:::::::..::::::::::,::::::::::Gf::;;#.:,::;;;;;;;;;;;;;t,,EEEEEEE
EEEEEEEEEEEj,t . iiiiiiiitW::::.fE.:::,:::::::::::::::,::::::::::#.::;:K.::::,;;;;;;;;;;;;,;;;EEEEEE
EEEEEEEEEEEEji...tiiiiiiiifD::::.WG:::;:::::::::::::::,:::::::::.K.:,;;j::::::;;;;;;;;;;;;;;;:EEEEEE
EEEEEEEEEEEEji; . ,iiii;;iiiED:::.jE :;:::::::::::::::::::,:::::i;::;,E :::,::,;;;;;;;;;;;;;;;KEEEEE
EEEEEEEEEEEEEjii ..,t;GWWWWWKK#.:::KE:;:::::::::::::::::::;::::.K :,;,#::::::::;;;;;;;;;;;;;;;fEEEEE
EEEEEEEEEEEEEEjt,, . W,.::::::::::::,W.:::::::::::;:::::::;::::jE::;;GL::::::::;;;;;;;;;;;;;;;:KEEEE
EEEEEEEEEEEEEEEjf,;. G;,,,::::,::::::GG.::::::::::,:::::::;::::W,::;;#:::::::::;;,;;;;;i,;;;;;,EEEEE
EEEEEEEEEEEEEEEEEjft,#G,,,,tGEi:::::::tW :::::::::,:::::::::::it::;;;f:::::::::,;i,;;;;,;;;;;;;tEEEE
EEEEEEEEEEEEEEEEEEEjf DWWW#EGjK::::::::,W.::::::::,,::::::::::W.::;,E.::::::::::;;;;;;;;i;;;;;;,EEEE
EEEEEEEEEEEEEEEEEEEEji.;,t.jKE.::;,:::::.Kj.::::::::::::::::.E,::;;LE::::,::::::,,i;;;;;;,;;;;;,EEEE
EEEEEEEEEEEEEEEEEEEEEf ;;tKEi.:;;,K;::::: WE.:::::::::::::::DW::,;,W:::::;:::::::,t;;;;;;;;;;;;;KEEE
EEEEEEEEEEEEEEEEEEEEEj:,Kt ::;;,E,Gf,,:::::.#G.::::::::::::W;::,;:E.:::::,:::::::;,;;;;;;;;;;;;;EEEE
EEEEEEEEEEEEEEEEEEEEEj;tK:::;,;Wf:.Wf;::::::.DKi.::::::: t#j:::;;DW::::::,:::::::;;;;;;;;;;;;;;;GEEE
EEEEEEEEEEEEEEEEEEEEEjt:Ki,tGWf.:::.GG;;:::::: iW#DfffEWEi::::;,fL.:::::::,::::::;;;;;;;;;;;;;;;jEEE
EEEEEEEEEEEEEEEEEEEEEjf:jit;.::::::::iWi;;:::::::.......::::;;:WL::;:::::::::::;:,;;;;;,;;;;;;;itEEE
EEEEEEEEEEEEEEEEEEEEEjf:j::::,::::::::t#i,;,::::::::::::::;;;:Wi:::;:::::::::::;::;;;;;i;;;;;;,i,KEE
EEEEEEEEEEEEEEEEEEEEEjf.f::::;::::::::::f#j:;;;;,,,,,,;;;;:;WK ::::,::::::::::::,:;;;;;i;;;;;;;i:KEE
EEEEEEEEEEEEEEEEEEEEEjf.f::::;:::;:::::::.KWt:,;;;;;;;;,:;KW;.::::::::::::::::::;:;;;;;;,;;;;;;i:KEE
EEEEEEEEEEEEEEEEEEEEEjf.j::::::::;:::::::::.iG#WEGLGDEWWEj.:::::::::::::::::::::::;;;;;,;;;;;;;;,DEE
EEEEEEEEEEEEEEEEEEEEEjf:j.:::::::;::::::::::::.:jfffjt,..::::,::::::::::::::::::::,;;;;;;;;;;;;;,LEE
EEEEEEEEEEEEEEEEEEjjjfi,ifffj,:::;::::::::::::::::,::::::::::;:::::::::::;::::::::,;;;;;;;;;;;;;;fEE
EEEEEEEEEEEEEEEEEjji;. ;;,,;tff:::::::::::::::::::;::::::::::;::::,::::::;::::::::,;;;;;;;;;;;;;;jEE
EEEEEEEEEEEEEEEjf:,..:.;;;;;;,j::::::;::::::::::::;:::::::::::::::;::::::,,:::::::,,;;;;;;;;;;;;;iEE
EEEEEEEEEEEEEEEEf  ..::i;;,,;jf::::::;::::::::::::;:::::::::::::::;:::::::::::::::,,t;;;;;;;i,;;;iEE
EEEEEEEEEEEEEEEEEjffjjffLffti.:::::::;::::::::::::::::::;:::::::::::::::::::::::::,;i,;;;;;;i,;;;;EE
EEEEEEEEEEEEEEEEEEEEDDDG.:.::::::::::;::::::::::::::::::;:::::::::::::::::::::::::,;;,;;;;;;;;;;;,EE
EEEEEEEEEEEEEEEEEEEEEEEi:::::::::::::,::::::::::::::::::,:::::::::::::::::::::::::,;;,;;;;;;;;;;;,EE
EEEEEEEEEEEEEEEEEEEEEEE::;::::::,:::::::::::::::::::::::,,::::::::::::::::::::::::,;;;;;;;;;;;;;;:EE
EEEEEEEEEEEEEEEEEEEEEEE.:;::::::,:::::::::::::,:::::::::::::::::::::::::::::::::::,;;;;;,i;;;;;;;:EE
EEEEEEEEEEEEEEEEEEEEEtE::;::::::,:::::::::::::,::::::::::::::::::::::::,:::::::;::,;;;;;,i;;;;;;;:EE
EEEEEEEEEEEEEEEEEEEEEEE::;::::::,::::::::;:::::,:::::::::::::::::::::::,:::::::;::,;;;;;,i;;;;;;,:::
`, "font-family:monospace");