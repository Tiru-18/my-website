function init_onlyyou() {
    // Adjust the height of the divs to window height plus some offset
    $("#div_onlyyou").css({"height": $(window).height() + 260 + "px"});
    $("#div_oy_inner").css({"height": $(window).height() + 260 + "px"});

    var start_bg_img = start_content['bg_img'];
    if (typeof(start_content['bg_style']) !== 'undefined' && start_content['bg_style'] === 'bg_custom') {
        if (typeof(start_bg_img) !== 'undefined' && start_bg_img !== '') {
            $("#div_onlyyou").css({"background-image": 'url(' + start_bg_img + ')'});
        }
    }

    // Set title
    var title = (typeof(start_content['chase_title']) !== 'undefined' && start_content['chase_title'] !== '') ? start_content['chase_title'] : 'Will you be my girlfriend?';
    $('.div_oy_text h1').html(title);

    // Set text content
    var content = (typeof(start_content['chase_text']) !== 'undefined' && start_content['chase_text'] !== '') ? start_content['chase_text'] : `
        "Hi di Mailuuuuu, 💖
        🌙 My Moon, my guiding light 🌙
        💕 My Girl, the rhythm of my heartbeat 💕
        💭 My Dream, the wish I never stop making 💭
        🤗 My Comfort, where my soul feels at home 🤗
        ❤️ My Lifeline, the love that keeps me alive ❤️
        💞 My Everything, my forever, my always 💞

        And yet... I am just a something 😊, forever lost in you.

        💓 My love for you is endless, deeper than the ocean and brighter than the stars. ✨
        Every thought, every moment, every beat of my heart whispers your name. 💕

        Even if life takes us on different paths, my love will never change.
        You are the poetry my heart writes, the song my soul sings. 💝

        🥺 I miss you beyond words, beyond time... 🥺
        Every second without you feels like an eternity.

        💫 'Meeting you was the most beautiful chapter of my story.' 💫
        💔 'Loving you is a dream I never want to wake up from, even if fate says otherwise.' 💔

        ❤️ என் தேடலில் கிடைத்த மிகச் சிறந்த பொக்கிஷம் உன் நினைவு! ❤️
        <um style='color: #F44336;'>💕</um>
    `;
    $('.div_oy_text .p_oy_text').html(content);

    // Set image source
    if (typeof(start_content['img_bool']) !== 'undefined' && start_content['img_bool'] === 'img_true') {
        if (typeof(start_content['img_src']) !== 'undefined' && start_content['img_src'] !== '') {
            $(".img_oy_text").attr('src', start_content['img_src']);
        }
    } else if (typeof(start_content['img_bool']) === 'undefined' || typeof(start_content['chase_text']) === 'undefined') {
        var random_img = random_img_as();
        $(".img_oy_text").attr('src', random_img);
    }

    // Play background music
    playBackgroundMusic();
}

// Function to play background music
function playBackgroundMusic() {
    // Create an audio element dynamically
    var audio = new Audio('music/Chillan-Chirukki-BGM.mp3'); // Replace with the actual path to your music file
    audio.loop = true; // Loop the music
    audio.autoplay = true; // Play automatically
    audio.volume = 0.5; // Set the volume (0 to 1)
    audio.play();
}

var array_oy_benefit = [];
if (typeof(start_content['chase_benefit']) !== 'undefined') {
    array_oy_benefit = start_content['chase_benefit'];

    // Default values if empty
    array_oy_benefit[0] = array_oy_benefit[0] || 'I will give you my life.';
    array_oy_benefit[1] = array_oy_benefit[1] || 'Make delicious food for you every day';
    array_oy_benefit[2] = array_oy_benefit[2] || 'Tell you a story when you can\'t sleep';
    array_oy_benefit[3] = array_oy_benefit[3] || 'Give you the freedom to do what you like';
} else {
    array_oy_benefit = ['I will give you all my life', 'I will make delicious food for you every day', 'I will tell you stories when you can\'t sleep', 'Give you the freedom to do what you like'];
}
console.log(array_oy_benefit);

var index_text_oy = 0;
var count_text_oy = array_oy_benefit.length;
console.log('Total ' + count_text_oy + ' condition');

function oy_show_benefit() {
    var oy_text_height = $(".div_oy_text").height();
    if (index_text_oy < count_text_oy) {
        console.log('now the index_benefit_oy is->' + index_text_oy);
        console.log('now the benefit_oy is->' + array_oy_benefit[index_text_oy]);
        $(".li_oy_benefit").eq(index_text_oy).html(array_oy_benefit[index_text_oy]).show();
        if ($(document).height() - oy_text_height < 520) {
            $("#div_onlyyou").css({"height": $(document).height() + 160 + "px"});
            $("#div_oy_inner").css({"height": $(document).height() + "px"});
            console.log('update the document height +160');
        }
        index_text_oy++;
    } else {
        oy_show_note();
    }
}

function oy_show_note() {
    $("#div_oy_note").show();
}

function oy_hide_note() {
    $("#div_oy_note").hide();
}

function oy_go_next() {
    $("#div_oy_yes").show();
    setTimeout(function () {
        $('#div_onlyyou').fadeOut();
        init_theme();
    }, 2000);
    setTimeout(function () {
        $('#div_onlyyou').remove();
    }, 3000);
}

function random_img_as() {
    // Ensure array_as_pics_s is defined and contains valid image URLs
    var random_num = Math.floor(Math.random() * array_as_pics_s.length);
    var random_img = array_as_pics_s[random_num];
    return random_img;
}
