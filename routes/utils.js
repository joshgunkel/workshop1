
var models = require('../models/models');

exports.update_template = function (req, res) {

    //http://www.just-pooh.com/fanstories.html

    //Pooh and the Kitten, a short story by Colette
    //One day, Pooh woke up in bed, looking for honey as usual. When he opened the pantry, 
    //    there was the honey. "Now the rumbly in my tumbly will stop." said Pooh. Prrrrrip! Meow! 
    //    "What could that be?" said Pooh. Prrrrip! Prrrip! Meow! 
    //    Then, Pooh heard an awkward scratching noise at the door. Srrrrch..... Srrrrrch..... Srrrrrch...... Srrrrrch....... 
    //    Pooh opened the door and saw a grey and white kitten standing at the door. Prrrrip! 
    //    "Oh," said Pooh. "It's just a cat. I'll keep you and name you Honey!"


    models.Template.findOne({ name: 'Pooh and the Kitten' }, function (err, template) {
        if (err) {
            res.json(err);
        }
        else if (template == null) {
            res.send(200, { status: 200, message: 'Template does not exists' });

        }
        else {
            

            var _now = new Date();


            template.background_audio = '/audio/stories/flight-theme-loop.mp3';
            template.pages[0].background_audio = '/audio/stories/fluffin-a-duck-loop.mp3';
            template.pages[1].background_audio = '/audio/stories/sneaky-adventure-loop.mp3';
            template.pages[2].background_audio = '/audio/stories/bumbly-march-loop.mp3';

            template.save(function (error, data) {
                if (error) {
                    //res.json(error);
                }
                else {

                    //res.send(template);

                    res.send(200, { status: 200, message: 'Template updated', template: template });


                }
            });


        }

    });



};


exports.update_story = function (req, res) {

    //http://www.just-pooh.com/fanstories.html






    models.Story.findOne({ name: 'Pooh and the Kitten' }, function (err, story) {
        if (err) {
            res.json(err);
        }
        else if (story == null) {
            res.send(200, { status: 200, message: 'Story does not exists' });

        }
        else {


            //set the participant data
            //story_data.characters[0].participant.first_name = 'Dywayne';
            //story_data.characters[0].participant.last_name = 'Johnson';
            //story_data.characters[0].participant.phone = '+18163774825';
            //story_data.characters[0].participant.email = 'djohnsonkc@gmail.com';

            //story_data.characters[1].participant.first_name = 'Josh';
            //story_data.characters[1].participant.last_name = 'Gunkel';
            //story_data.characters[1].participant.phone = '+18167198839';
            //story_data.characters[1].participant.email = 'josh.gunkel@hallmark.com';


            //story_data.characters[2].participant.first_name = 'Jake';
            //story_data.characters[2].participant.last_name = 'Gahr';
            //story_data.characters[2].participant.phone = '+18165003532';
            //story_data.characters[2].participant.email = 'jake.gahr@hallmark.com';



            story.background_audio = '/audio/stories/flight-theme-loop.mp3';
            story.pages[0].background_audio = '/audio/stories/fluffin-a-duck-loop.mp3';
            story.pages[1].background_audio = '/audio/stories/sneaky-adventure-loop.mp3';
            story.pages[2].background_audio = '/audio/stories/bumbly-march-loop.mp3';

            story.save(function (error, data) {
                if (error) {
                    //res.json(error);
                }
                else {

                    //res.send(template);

                    res.send(200, { status: 200, message: 'Story updated', story: story });


                }
            });


        }
    });

};