  exports.getHome = (req, res, next) => {
    res.render('home', {
        pageTitle: 'America\'s Cattle',
        path: '/',
        source1: 'https://www.thecattlesite.com/breeds/beef/7/aberdeen-angus/',
        source2: 'https://www.thecattlesite.com/breeds/beef/22/holstein/',
        source3: 'https://pixels.com/featured/authentic-cowhide-cgbaldauf.html',
        source4: 'https://m.facebook.com/agribusinesszw/photos/a.1470725459720454/3092041120922205/?type=3&eid=ARBtZSSkHitvh3M5zxXGCTbgfJgNOzBqZLAx626DV0bNHWd_aWkoWv2uY4XR9PZEerXy9UrP5woff5Tx&locale=ne_NP&_rdr',
        source5: 'https://www.shutterstock.com/es/editorial/image-editorial/stampede-rodeo-calgary-canada-16-jul-2017-9488183b',
        source6: 'https://eatgrueldog.wordpress.com/2019/07/19/good-morning-ladies/',
        source7: '',
        source8: '',
        source9: '',
        source10: ''
      });
  };

  exports.getMeat = (req, res, next) => {
    res.render('meat', {
        pageTitle: 'Meat Cattle',
        path: '/meat'
      });
  };

  exports.getAberdeen = (req, res, next) => {
    res.render('cattlePages/aberdeen-angus', {
        pageTitle: 'Aberdeen-Angus',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Angus%20Bull.jpg',
        alt: 'Aberdeen-Angus',
        maleHeight: '45 - 48 inches',
        maleWeight: '1,300 - 1,600 lbs',
        femaleHeight: '42 - 46 inches',
        femaleWeight: '900 - 1,100 lbs',
        general1: 'The Aberdeen Angus, commonly known as Angus, originated in Scotland. More specifically, almost 200 years ago (1824), the first breed of Angus came from North Eastern Scotland.',
        general2: 'Angus are well known for being hearty and resilient to weather. In fact, they can live comfortably in cold and warm climates. These climates range from snowy mountains to warm grassy plains and everything in between. The warmest temperature being 100 degrees Fahrenheit!',
        general3: 'They come in two colors, black and red. The red is more of a brownish red. Both colors are solid, so there are no spots or other patterns, other than solid black or red.',
        general4: 'They are polled cattle, which means they do not grow horns like other cows. This is really convenient for ranchers/farmers because it makes Angus safer to handle, breed and transport.',
        general5: '',
        special: 'They are extremely desired for their meat to feed ratio and their high calving birth rates. This means Angus don\'t require high amounts of feed to produce quality meat. This breed of bovine also has high birth rates and mostly requires very little assistance from their owners. Most of the calves are able to move around and even walk within a matter of minutes.',
        pattern1: 'Solid Black',
        pattern2: 'Solid Red',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        source1: 'https://www.thecattlesite.com/breeds/beef/7/aberdeen-angus/',
        source2: '',
        source3: '',
        source4: '',
        path: 'cattlePages/aberdeen-angus'
      });
  };

  exports.getAubrac = (req, res, next) => {
    res.render('cattlePages/aubrac', {
        pageTitle: 'Aubrac',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/aubrac2.jpg',
        alt: 'Aubrac',
        maleHeight: '55 inches',
        maleWeight: '1818 lbs',
        femaleHeight: '51 inches',
        femaleWeight: '1278 lbs',
        general1: 'The Aubrac came to America from France. They love to live in mountains and eat grains, corn and grass. They are strong, tough and healthy. They are also very heavy. They can weigh up to 2,500 pounds!',
        general2: 'Because they are so heavy, they must eat a lot. Grass does not cost much, hay can cost a good amount of money, and grain costs a lot of money. Their meat is lean, but still tasty and good quality.',
        general3: 'Aubrac are also calm. This is great for farmers or ranchers who don\'t know a lot about taking care of cows. Moving large animals who are mean takes a lot of patience and skill. Even then it can be hard.',
        general4: 'They calf really well, which means it\'s easy for them to have calves. Their calves are very small and will grow very fast. Aubrac calves are lots of fun and energetic but will grow calmer as they get older.',
        general5: '',
        special: 'What makes Aubrac special is their ability to store energy for winter time. They have lean meat, which means they don\'t have much fat to keep them warm. So in the winter, they must be kept in a barn and fed yummy hay or grains.',
        pattern1: 'Pale Gray',
        pattern2: 'Wheat Yellow',
        pattern3: 'Black',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/aubrac',
        source1: 'https://www.thecattlesite.com/breeds/beef/58/aubrac/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBarzona = (req, res, next) => {
    res.render('cattlePages/barzona', {
        pageTitle: 'Barzona',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/barzonabull.jpg',
        alt: 'Barzona',
        maleHeight: '50 - 58 inches',
        maleWeight: '1800 lbs.',
        femaleHeight: '44 - 53 inches',
        femaleWeight: '1100 lbs.',
        general1: 'The first Barzona cow comes from Arizona. They can live in the desert, cold dry mountains or grassy hills. This means they can live almost anywhere and be happy.',
        general2: 'Because they can live almost anywhere, they are an easy cow to start out with. They are healthy and give good meat. They are not very big cows, so they don\'t eat as much.',
        general3: 'But even though they don\'t eat as much as other cows, they still give good meat. This means they are a cheaper option for farmers.',
        general4: 'They mature fast, which means they can start having babies and producing milk sooner than other cows. It also means they get fatter quicker.',
        general5: '',
        special: 'Barzona\'s are not mean. They will walk away from danger and only fight if they have to. This means they have a better chance of survival in places with predators, like wolves, cyotes, mountain lions, and bears.',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/barzona',
        source1: 'https://www.thecattlesite.com/breeds/beef/82/barzona/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBeefalo = (req, res, next) => {
    res.render('cattlePages/beefalo', {
        pageTitle: 'Beefalo',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/beefalobull1.jpg',
        alt: 'Beefalo',
        maleHeight: '50 - 55 inches',
        maleWeight: '1800 - 2200 lbs.',
        femaleHeight: '44 - 51 inches',
        femaleWeight: '1700 - 1900 lbs.',
        general1: 'Beefalo are part buffalo, also called the "American Bison". Most of the time, a beefalo has a bull for a father and a buffalo as a mother. Also, beefalo refers to ANY cattle with buffalo in them. Beffalo could be part hereford, angus, brahaman, or something else.',
        general2: 'That means they usually look more like a larger or more hairy cow. There are some that look more buffalo, but most look like cows.',
        general3: 'They are not milk cows, but beefalo give a sweet creamy milk that is great for making butter or cream. This also helps the calves get nice fat as they grow.',
        general4: 'Beefalo calves are often healthier than regular calves. They don\t get sick as easy from bugs, or sickness that usually infect cows. They are also smaller, sometimes only weight 40 lbs. But when they start growing, they don\'t stop! ',
        general5: 'As they grow, they don\t get as fat. They grow lots of muscle. Which means they give lots of lean beef. Not just lean beef, but lean beef with a special taste. ',
        special: 'There is almost no downside to being part buffalo. One of the only problems is male beefalo are not always fertile. Meaning they can\'t have babies. But the female beefalos are always fertile. So they can always have babies.',
        pattern1: 'Varies',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/beefalo',
        source1: 'https://www.thecattlesite.com/breeds/beef/97/beefalo/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBeefMaster = (req, res, next) => {
    res.render('cattlePages/beef-master', {
        pageTitle: 'Beef-Master',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Beefmaster%20Bull.jpg',
        alt: 'Beef-Master',
        maleHeight: '62 inches',
        maleWeight: '2600 lbs.',
        femaleHeight: '56 inches',
        femaleWeight: '1700 lbs.',
        general1: 'Beefmasters are from Texas. They have existed for less than 100 years! They are a special breed that were created for something called "dual-purpose". That means they are raised for both milk and meat.',
        general2: 'They can be used as milk cattle, however, most are used for beef. With so much milk, their calves drink all they can. This makes them grow faster and fatter.',
        general3: 'Growing so fast at a young age is great for beef cattle. The Beefmaster produces great meat with lots of taste.',
        general4: 'They healthy cows and usually mild mannered. This is a very good thing for such large animals. It also makes it much easier to use them for both milking and eating.',
        general5: '',
        special: 'Beefmasters were created from at least four other breeds: brahman, hereford, milking shorthorn, nelore. Mentioned earlier, they can be used as milk cows, so if a farmer wants to have a milk cow he can one day eat, a beefmaster would be perfect.',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/beef-master',
        source1: 'https://www.thecattlesite.com/breeds/beef/46/beefmaster/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBeefShorthorn = (req, res, next) => {
    res.render('cattlePages/beef-shorthorn', {
        pageTitle: 'Beef-Shorthorn',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Beef%20Shorthorn%20Bull.jpg',
        alt: 'Beef-Shorthorn',
        maleHeight: '57 inches',
        maleWeight: '2000 lbs.',
        femaleHeight: '55 inches',
        femaleWeight: '1400 lbs.',
        general1: 'Beef shorthorns came from england. Beef shorthorns stay true to their name and only grow short horns. Sometimes don\'t have any horns. Used for meat, they tend to grow to a good size.',
        general2: 'They grow fairly quickly, but their calves are born at 85 pounds. For a calf, that\'s decent size.',
        general3: 'Beef Shorthorn bulls are aggresively active breeders. This means the bulls are constantly trying to increase number of cows in their herd. This is some of the best news for farmers and ranchers.',
        general4: 'Beef Shorthorn cows mature very fast. These cows can start breeding just after the year mark. They almost never need assistance from their owners. So breeding and giving birht is easy.',
        general5: 'Their meat is great quality and they tend to have lots of it. For the first year, they can gain up to 3 pounds a day. Most calves only grow 2 pounds a day, max. This makes Beef Shorthorns a good choice for farmers and ranchers.',
        special: 'Beef Shorthorns are extrememly docile, meaning very calm. They are very easy to breed with other cattle, which helps make them healthier. Beef Shorthorns sometimes have a sickness kills them. This sickness causes calves to be born with bad legs, stomachs and even bones.',
        pattern1: 'Solid Red',
        pattern2: 'Solid White',
        pattern3: 'Roan (Red and White)',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/beef-shorthorn',
        source1: 'https://www.thecattlesite.com/breeds/beef/16/beef-shorthorn/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBelgianBlue = (req, res, next) => {
    res.render('cattlePages/belgian-blue', {
        pageTitle: 'Belgian-Blue',
        imageURL: 'https://images.saymedia-content.com/.image/t_share/MTc0MDY5MjcxMTMwMDIzNDkw/super-cow.jpg',
        alt: 'Belgian-Blue',
        maleHeight: '60 inches',
        maleWeight: '2755 lbs',
        femaleHeight: '55 inches',
        femaleWeight: '2425 lbs',
        general1: 'Belgian Blue is the most visually muscular breed. If you think it has a lot of muscle, you are right. These cows have been bred to gain an unusual amount of muscle. This means there is more meat. on each cow.',
        general2: 'Because their breeding was so carefully selected for the sole purpose of gaining muscle, calves end up putting on muscle around 4 to 6 weeks old. That\'s a calf none of the other barnyard animals will mess with.',
        general3: 'Their large amounts of muscle may appear to decrease mobility, but they are mobile. They may not be very fast, as they are very heavy, but they still have full range of motion and produce a lot of force behind each movement.',
        general4: 'Something interesting about Belgian Blues is they tend to mature at an older age. This means it takes more time for them to sexually reproduce and yield milk.',
        general5: 'Fat is generally what makes meat more flavorful and marbled. Because of this, Belgian Blues are not the greatest quality of meat. It can be tender, but will not give the same quality as an angus.',
        special: 'There is a gene that alerts the body of the maximum capacity for muscle able to be gained. This gene is what has been bread out of Belgian Blues. This means they are able naturally put on up to twice the amount of muscle they normally would be able to gain.',
        pattern1: 'Grey Blue and White',
        pattern2: 'Solid White',
        pattern3: 'Solid Black',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/belgian-blue',
        source1: 'https://www.thecattlesite.com/breeds/beef/8/belgian-blue/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBeltedGalloway = (req, res, next) => {
    res.render('cattlePages/belted-galloway', {
        pageTitle: 'Belted-Galloway',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/beltiebull.jpg',
        alt: 'Belted-Galloway',
        maleHeight: '53 inches',
        maleWeight: '2105 lbs',
        femaleHeight: '47 inches',
        femaleWeight: '1322 lbs',
        general1: 'Galloways came from Scottland. They have been found in records all the back to the 11th century. That\'s 1,000 years ago! Because this is such an old breed, they have been able to adapt to different diseases and hardships.',
        general2: 'These cows give may not produce milk like a Holsteins or Jeresy, but their milk is very rich. These cow\s milk make for excelent cheeses, and cream/butter. ',
        general3: 'Its meat is also rich and full of flavors. In fact, the meat has been described as tender, sweet AND juicy. What a burger or steak these ladies could make! The meat is not necessarily a delicacy, but is definitely of high quality.',
        general4: 'The meat may taste wonderful, but the Belted Galloway tends to only have low fat. Instead of putting on large amounts of fat, they have evolved to have a doble coat. This protects against elements and keeps the meat from becoming tough.',
        general5: 'Belted Galloways are naturally polled, meaning they do not grow horns. Again, this is great for farmers/ranchers with large amount of cattle needed to be moved. ',
        special: 'Belted Galloways have a singular white "belt" around its body. Because the rest of its color is a midnight black, the white belt is far more striking than it would be with any other color.',
        pattern1: 'Solid Black w/ White Belt',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/belted-galloway',
        source1: 'https://www.thecattlesite.com/breeds/beef/9/belted-galloway/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBlondeDAquitaine = (req, res, next) => {
    res.render('cattlePages/blonde-d-aquitaine', {
        pageTitle: 'Blonde-d\'Aquitaine',
        imageURL: 'https://i.pinimg.com/originals/a6/43/32/a6433219253ccf9b5a7780ced0c769b0.jpg',
        alt: 'Blonde-d\'Aquitaine',
        maleHeight: '65 inches',
        maleWeight: ' 3086 lbs',
        femaleHeight: '61 inches',
        femaleWeight: '2315 lbs',
        general1: 'The Blonde d\'Aquitaine was originally created in the middle ages. Orginally bred to work, they are large, very strong and produce a fair amount of milk.',
        general2: 'Strong is an understatement. This breed of bull is so strong, it was the main means of hauling anything. In the middle evil ages, this included large amount of weapons/armor, crops yields, and anything else heavy.',
        general3: 'They are also large for a breed of cow. Besides strength that comes with this great size, they tend to be docile. It was the perfect work animal for manual labor.',
        general4: 'Large amounts of meat com from the Blonde d\'Aquitaine. In fact, calves stop weaning at around 600 pounds. They tend to also graze very heavily, so not all the weight comes from their mother\'s milk.',
        general5: '',
        special: 'They usually have a beautiful blonde, light golden, or white color to them. Hence the name Blonde d\'Aquitaine. Their hide usually makes for visual appealing material that is commonly used for various things, including furniture, clothes, accessories and more.',
        pattern1: 'Blonde',
        pattern2: 'Light Golden',
        pattern3: 'White',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/blonde-d-aquitaine',
        source1: 'https://www.thecattlesite.com/breeds/beef/10/blonde-daquitaine/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBraford = (req, res, next) => {
    res.render('cattlePages/braford', {
        pageTitle: 'Braford',
        imageURL: 'https://i.pinimg.com/originals/c0/12/f8/c012f8861b7e4c0bac99071f71572427.jpg',
        alt: 'Braford',
        maleHeight: '54 inches',
        maleWeight: '2205 lbs',
        femaleHeight: '50 inches',
        femaleWeight: '1653 lbs',
        general1: 'Brafords are a breed that came from Brahman and Herefords. They usually have the losser skin around their neck, that comes from the Brahman, and good width/stockiness, which comes from the Hereford.',
        general2: 'All breeds of cows are good mothers, but the Braford is a great mother. It has the aggression to protect instead of running away, produces a fair amount of milk, naturally stay close to their calves at all times.',
        general3: 'The mothers are not the only one\'s with aggression. Bulls have a tendancy to become overly aggressive. They are naturally stubborn, so it makes them harder to work with. But if they are angered, they have problems charging with the intent to harm or kill.',
        general4: 'Because they can have a bad temperament, not all but a lot do, they are a natural choice for rodeos. With the genetic make up from the Brahman and Hereford, they have good dexterity and a range of motion. This means the bull rider will have a greater challenge.',
        general5: '',
        special: 'There is a variation of Braford that was created in Australia. They were able to breed the genetics to match 50 percent of both Brahman and Hereford perfectly. Most Braford are actually 3/8 Brahman and 5/8 Hereford. This is what makes them thicker than the Brahman.',
        pattern1: 'Solid Red w/ White face',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/braford',
        source1: 'https://www.thecattlesite.com/breeds/beef/45/braford/',
        source2: 'https://cattleinternationalseries.weebly.com/braford.html',
        source3: '',
        source4: ''
      });
  };

  exports.getBrahman = (req, res, next) => {
    res.render('cattlePages/brahman', {
        pageTitle: 'Brahman',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/brahmanbull1.jpg',
        alt: 'Brahman',
        maleHeight: '54 inches',
        maleWeight: ' 2200 lbs',
        femaleHeight: '49 inches',
        femaleWeight: '1400 lbs',
        general1: 'The Brahman originates from India and is actually considered sacred. But because they have suffered from a large amount of various hardships in the climates of India, they are an extremely adaptable breed of cow.',
        general2: 'Being so adaptable, they are mostly used in desert climates where the heat is well over 100 plus degrees fahrenheit. It also makes them a great choice for cross breeding with other cattle. The Braford is a great example of the Brahman mixed with another breed (Hereford). The Brahmousine is another great example (crossed with a limousin cow)',
        general3: 'Brahaman have a few key visual characteristics. They have a hump on their back that carries water, just like a camel. When it becomes very full, it will sway as the cow walks. They have large floppy ears, much like a hound dog or rabbit. And they have a lot of loose skin around their necks. ',
        general4: 'All of these visual characteristics are useful and have come from their ability to adapt. The water storage is to help with dehydration when water is scarce. The large ears and loose skin help the cow release heat. And because cows do not sweat like humans, they definitley need a way to keep cool in such hot climates.',
        general5: 'Although they are not the largest breed, they are medium sized, they grow fairly quickly and have a decent amount of muscle. ',
        special: 'These are great cows for farmers/ranchers, not just because they are so great at adapting and are disease resistant, but they mature early and breed regulaly without assistance. They also calf fairly easy, so growing a herd would be no problem at all.',
        pattern1: 'Solid Light Grey',
        pattern2: 'Solid White',
        pattern3: 'Solid Black',
        pattern4: 'Solid Light Red',
        pattern5: 'All colors include black on shoulders.',
        path: 'cattlePages/brahman',
        source1: 'https://www.thecattlesite.com/breeds/beef/67/brahman/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBrahmousine = (req, res, next) => {
    res.render('cattlePages/brahmousine', {
        pageTitle: 'Brahmousin',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/brahmousinbull1.jpg',
        alt: 'Brahmousin',
        maleHeight: '52 inches',
        maleWeight: '4000 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1400 lbs',
        general1: 'The Brahnousin is a mix breed that came from Brahman and limousin cattle. A pure-bred must be 5/8 limousin and 3/8 Brahman. ',
        general2: 'So with most of their genetics coming from limousins, they tend to have longer bodies, thicker bones and more muscular definition than a Brahman. However, because they are almost half and half, they have longer ears, loose skin and a very small hump on top of the shoulders.',
        general3: 'The Brahman make the this cattle breed more disease resistant and able to endure hotter weather. Because Brahmans do have a decent amount of muscle, the cross did not dramtically decrease. In fact, there was almost no muscle loss at all.',
        general4: 'They mature fairly early, calve easiluy without much assitance (if any is needed at all), breed on their own without intervention of any kind.',
        general5: 'They Brahmasine is a decent cow for inexperienced farmers/ranchers. No matter if they are pure-bred Brahmasine or not, they will give a decent amount of meat and live fairly comfortable in warmer climates.',
        special: 'Because Brahmousines are a mix, not all are purebreds, Some will look like large muscular Brahmans and other will look like loose skin limousins. Both may have off colors of the original cross it shares most of its characteristics with.',
        pattern1: 'Red',
        pattern2: 'Golden Red',
        pattern3: 'Tan',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/brahmousine',
        source1: 'https://www.thecattlesite.com/breeds/beef/102/brahmousin/',
        source2: 'https://petkeen.com/brahmousin-cattle-breed/',
        source3: '',
        source4: ''
      });
  };

  exports.getBrangus = (req, res, next) => {
    res.render('cattlePages/brangus', {
        pageTitle: 'Brangus',
        imageURL: 'https://www.bovine-elite.com/wp-content/uploads/2016/10/New-Blood-50H-2019-c.jpg',
        alt: 'Brangus',
        maleHeight: '54 inches',
        maleWeight: '4000 lbs',
        femaleHeight: '49 inches',
        femaleWeight: '2400 lbs',
        general1: 'Brangus is a cross breed between a Brahman and an Angus. A pure-bred is 3/8 Brahman and 5/8 Angus. Some of their visual characteristics include floppy ears (not necessarily long), loose skin on the neck, and generally tend to appear more muscular.',
        general2: 'The Brahman portion of genetics increase the disease resistance and heat adaptability, where as the Angus increases the meat yield and cold resitance. Usually more comfortable in warm or slightly cold climates, they can tolerate very cold and hot climates.',
        general3: 'The Brangus is a medium sized cow and naturally has a mild temperament. This is a fairly easy breed to manage, and grow. Disease resitance aside, their ability to breed on their own, without inervention, make them a suitable choice for increasing herd numbers.',
        general4: 'Brangus are mostly used for their meat and contain high quality results. Often, the meat is almost identical to the Angus cuts, with a slightly less marble texture. Still tender and full of flavors, there are not many that would refuse a Brangus steak.',
        general5: '',
        special:  'Because these cows are so versatile and adaptable, they can be commonly found on four different continents: North America, South America, Africa, Australia. North America regions include the United States, Canada, and Mexico. South American Regions include Argentina. They are found all over Australia. And the African region is South Rhodesia.',
        pattern1: 'Black',
        pattern2: 'Red',
        pattern3: 'Tan',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/brangus',
        source1: 'https://www.thecattlesite.com/breeds/beef/43/brangus/',
        source2: '',
        source3: '',
        source4: ''
      });
  };
        

  exports.getBuelingo = (req, res, next) => {
    res.render('cattlePages/buelingo', {
        pageTitle: 'Buelingo',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/buelingobull.jpg',
        alt: 'Buelingo',
        maleHeight: '54 inches',
        maleWeight: '1800 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1200 lbs',
        general1: 'Buelingo cattle are comprised of many cattle into one. A large set of mixed genes that fell into one cow. The original blend of genes included Highland, Belted Galloway, Angus, limousin, and Shorthorn. Although most of the characteristics today are similar to the Angus, Shorthorn and limousin. An exception would be the belt, wich obviously comes from the Belted Galloway.',
        general2: 'With all the different genetics mixed into a single breed. Most of the genes foudn today are from selective breeding. Prodominately found are strong breeding abilities, consistent calving weights, tame temperaments, quality meat, strong calves, and early maturity. ',
        general3: 'Though not aggressive, the mothers are extremely nurtering and will not most likely stand between predators and their calves instead of running. They produce a fair amount of rich milk (which comes from the Belted Galloway), but it\'s not enought to use a Buelingo as a milk cow.',
        general4: 'They tend to grow a decent amount as calves. An average of up to 3.5 pounds a day, steers can grow fat very quickly and be slaughtered for meat as early as 18 months. Easy grazers with mild dispositions, this would be considered a great cow for beginning ranchers in a milder climate.',
        general5: '',
        special:  'Though this breed of cow visually shows characteristics with the Belted Gallowy, they do not have a second coat or produce the same sweet taste. Still delicious, mof the meat characteristics are similar to angus and shorthorn. ',
        pattern1: 'Red w/ White Belt',
        pattern2: 'Black w/ White belt',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/buelingo',
        source1: 'https://www.thecattlesite.com/breeds/beef/100/buelingo/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getCharolais = (req, res, next) => {
    res.render('cattlePages/charolais', {
        pageTitle: 'Charolais',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Charolais%20Bull.jpg',
        alt: 'Charolais',
        maleHeight: '59 inches',
        maleWeight: '3638 lbs',
        femaleHeight: '53 inches',
        femaleWeight: '2646 lbs',
        general1: 'Charolais cattle are origianlly from France. After World War II, the Charolais traveled to many other parts of the world including Argentina, Brazil, South Africa, United States and other places. They may be considered the French version of the Hereford. ',
        general2: 'This cow was carefully bred for size and muscle. Their bones are thick and can handle any weight of haul the muscles must strain for. Becuase it takes time to grow, another part of their breeding included rapid growth from the birth.',
        general3: 'Large muscles to match its bones and build, it has a muscularity which is impossible to miss. The muscualrity can even produce veins to appear when working. These cattle are not the fastest, but powerful and can make for valuable workers.',
        general4: 'Cattle competitions (both beauty and performance), often feature a Charolais or a Charolais mixed breed. Besides strenght, their hair is usually thick and will grow tough if not brushed, washed and taken care of. It will not harm the animal in to never manage the hair.',
        general5: 'Because they are mostly found in a solid white coat, their hide can be used as a beautiful white material used for furniture, clothes and other things.',
        special: 'Much like the Hereford, there is an amount of course hair on the face and up to the shoulders. The difference between the course hair is the Charolais will curl as it gets long. Not only that, but the overall body hair is also course if not brushed and manually taken care of.',
        pattern1: 'Solid White',
        pattern2: 'Solid Black',
        pattern3: 'Solid Red',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/charolais',
        source1: 'https://www.thecattlesite.com/breeds/beef/11/charolais/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getChianina = (req, res, next) => {
    res.render('cattlePages/chianina', {
        pageTitle: 'Chianina',
        imageURL: 'https://farmow.com/article-image/1600423287.jpg',
        alt: 'Chianina',
        maleHeight: '68 - 72 inches',
        maleWeight: '2850 lbs',
        femaleHeight: '59 - 62 inches',
        femaleWeight: '1750 - 2200 lbs',
        general1: 'Originally from Italy, Chianina cattle are very tall, decently muscular, extremely strong and resistent to bugs and disease. They have a tough black skin which makes them resistant to sun damage and insects like ticks and mosquitoes. They are said to be a not so distant relative to the Auruch (a wild cattle breed that recently went extinct in the last couple hundred years).',
        general2: 'Even with their very large size, they need very little, if any, birth assitance. They have smaller heads, so birthing is rarely a problem. Cross breeding these cattle is easy, efficient, and produces great results.  ',
        general3: 'Cross breeding, mostly with the purpose of increasing meat yields, the Chianina has an unmatched yield for lean meat. Lean meat because this breed is muscular and bred to work.',
        general4: 'Some of their visual characteristics, besides being tall and heavy for cattle, include short hair, long legs, long torso, wide shoulders, and very tough hoofs and head.',
        general5: '',
        special: 'Chianinas are the largest and quite possibly the oldest living breed found in the world today.  ',
        pattern1: 'Solid White',
        pattern2: 'Solid Grey',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/chianina',
        source1: 'https://www.thecattlesite.com/breeds/beef/44/chianina/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getCorriente = (req, res, next) => {
    res.render('cattlePages/corriente', {
        pageTitle: 'Corriente',
        imageURL: 'https://cattleinternationalseries.weebly.com/uploads/1/6/5/8/16581252/corriente-bull-charlie-copy-22.jpg?488',
        alt: 'Corriente',
        maleHeight: '67 inches',
        maleWeight: '3307 lbs',
        femaleHeight: '65 inches',
        femaleWeight: '2205 lbs',
        general1: 'Originally from Spain, they grow long horns not unlike their cousins, the Spanish fighting bulls. Because their horns were given special attention when breeding, they end up pointing straight out. This makes it very easy for them to gore their enemies.',
        general2: 'Much like the Barzona, they were originally used for milk, meat and working. they produce enough milk to get their calf and owner by. Their meat is lean but still of good quality. They are hardy and can live comfortably in the heat and cold. ',
        general3: 'Cross breeds of Corriente are often used in rodeos, mostly steer wrestling and roping. Their horns give the wrestler a greater ability to grab onto the horns. Their also thin enough for the ropers to tie easier than other breeds.',
        general4: 'They are great range cattle and will make the most of what they have. Whether it be sage brush, grass or grain, they will gladly eat it for breakfast, lunch and dinner.',
        general5: '',
        special: 'The Corriente can be found all over the world, and bull fighting being illegal in the United States, bull fighting is extremely popular in Latin coutries (Spain, Mexico and a couple South America countries)',
        pattern1: 'Any color except solid white',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/corriente',
        source1: 'https://www.thecattlesite.com/breeds/beef/84/corriente/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getDexter = (req, res, next) => {
    res.render('cattlePages/dexter', {
        pageTitle: 'Dexter',
        imageURL: 'https://dextercattle.org/wp-content/uploads/2019/11/Applejack-Spartan-Charles.jpg',
        alt: 'Dexter',
        maleHeight: '54 inches',
        maleWeight: '1000 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '700 lbs',
        general1: 'Dexters came from Ireland. Just tall enough for a leprechaun to ride, it\'s commonly known as the poor man\'s cow. Dexters are dual breed cows that produce meat and milk. Obviously not producing a large amount of either, it would be great for someone who just wants some milk and eventually meat. ',
        general2: 'Not picky about what they eay, they can be used to remove unwated plants, including weeds, from pastures. Besides removing plants from pastures and providing a little milk and meat, they are also kept as pets. They tend to have more affection and personalities when treated as pets.',
        general3: 'Dexters are actually very hardy and can survive off plants that other cattle cannot handle or at least live off of. This includes very low quality vegetation. ',
        general4: 'Not yielding large amounts of milk and meat, both turn out to be great qulity commodities and put more than a smile on the farmers face. Adding both a thirst quenched and filling an empty stomach, it can also add a pretty penny if the farmer has enough of these little bovines. ',
        general5: '',
        special: 'Everything about Dexters are special. There smaller size can only be matched by miniature cattle, like the miniature hereford. Mentioned before, they are sometimes kept as pets and show affection to owners, they also tend to keep fairly clean. Even if they get dirty, their sweet disposition may have them jump in the shower with you!',
        pattern1: 'Black',
        pattern2: 'Red',
        pattern3: 'Dun',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/dexter',
        source1: 'https://www.thecattlesite.com/breeds/beef/13/dexter/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getGelbvieh = (req, res, next) => {
    res.render('cattlePages/gelbvieh', {
        pageTitle: 'Gelbvieh',
        imageURL: 'http://knowledgebase.lookseek.com/images/animals/farmanimals/cattle/Gelbvieh-Cow.jpg',
        alt: 'Gelbvieh',
        maleHeight: '63 inches',
        maleWeight: '2646 lbs',
        femaleHeight: ' 57 inches',
        femaleWeight: '1764 lbs',
        general1: 'Gelbvieh are from Germany, their name is translated as "yellow cattle". They are actually a reddish gold color, but can be brown and black.',
        general2: 'The breed is reddish gold to russet or black in colour, with strong skin pigmentation and fine hair making them ideal in temperate to arid conditions. Medium to large in size, a long body with above average muscling and were originally horned but the majority are now polled',
        general3: 'They are usually docile or mild mannered. They have great quality meat and actually have a great ability to produce milk. Their known to have exceptional udders that make milking and wheening easy.',
        general4: 'With early maturity, they can both slaughter steers and breed early. As soon as they are at regulated weight, steers can be slaughtered immediately.',
        general5: '',
        special: 'Having more than a little resistance to heat and bugs. There was a study that proved Gelbviehs showed a remarkable resistance to heat and ticks. So much so, when Gelbviehs are bitten by ticks, the blood flow in that area is restriced and the ticks actually starve and die.',
        pattern1: 'Solid Red',
        pattern2: 'Solid Reddish Yellow',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/gelbvieh',
        source1: 'https://www.thecattlesite.com/breeds/beef/54/gelbvieh/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getHereford = (req, res, next) => {
    res.render('cattlePages/hereford', {
        pageTitle: 'Hereford',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/herefordbull.jpg',
        alt: 'Hereford',
        maleHeight: '54 inches',
        maleWeight: '1800 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1200 lbs',
        general1: 'Believed to be from England and Wales, the actual known origin of Hereford is not perfectly known. This breed has been carefully selected for their size, their meat and their ability to grow off grass, grain, and hardiness.',
        general2: 'They are known for thriving in rough circumstances, including climates, low quality foilage, and temperatures. They tend to live longer lives, up to and beyond 15 years. That\'s quite old for cattle.',
        general3: 'Some of the climates they\'re able to thrive in are artic temperatures of Finland and sub-tropic heat from Brazil. This makes these cattle not olny adaptable, but perfect additions to a herd for any beef owner.',
        general4: 'Cross breeding Herefords is common and sometimes necessary depending on the desired outcome of a farmer/rancher\'s current herd. They are not just adaptable but their meat is only second to Angus meat. They can store fat and have delicious meat. ',
        general5: '',
        special: 'Herefords live longer, they adapt extremely well, forage especially well, provide excellent meat and provide additional plusses when cross breeding. It is often the most common choice among owners in colder climates in the Northwestern states (Idaho, Montana, Wyoming, Washignton).',
        pattern1: 'Red and White',
        pattern2: 'Tan and White',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/hereford',
        source1: 'https://www.thecattlesite.com/breeds/beef/14/hereford/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getHighland = (req, res, next) => {
    res.render('cattlePages/highland', {
        pageTitle: 'Highland',
        imageURL: 'https://cdn.iamcountryside.com/wp-content/uploads/2019/02/GettyImages-845355220.jpg',
        alt: 'Highland',
        maleHeight: '49 inches',
        maleWeight: '1433 lbs',
        femaleHeight: '41 inches',
        femaleWeight: '992 lbs',
        general1: 'Highlands are originally from Scottland. Known for there long horns, long hair that covers half their face and Yak like appearance, they are perfect for windy and cold climates. ',
        general2: 'This breed of bovine has a second coat, which means they are usually able to stay dry and warm in the snow and rain. It also means a wind chill does absolutely nothing to affect a highlands comfort. Their top coat can grow up to 13 inches long, at that point it would be hard for even a wolf to bite through that coat.',
        general3: 'What comes with crazy long hair? You guessed it, shedding. They can shed so much hair, if you collected it after a harsh winter, you may have enough to fill over a dozen couch pillows.',
        general4: 'Highlands are another cow that can forage and make the best of poor grazing conditions. They also live a longer period of time and breed for a longer period of time. ',
        general5: '',
        special: 'Because of all their natural abilities to thrive in cold, poor conditions, they make a great breed to cross with. They also perform well in beauty competitions among cattle. Producing rich milk, a farmer really only needs one of these if all he wants is a small amount of high quality milk, good meat, and wonderful hide.',
        pattern1: 'Tan',
        pattern2: 'Black',
        pattern3: 'Brown',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/highland',
        source1: 'https://www.thecattlesite.com/breeds/beef/40/highland/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getLimousin = (req, res, next) => {
    res.render('cattlePages/limousin', {
        pageTitle: 'Limousin',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSql9XoNB_L-CvIOwAw07emA9QLBwAKpoEqQY9QvO2Eb4eHgUce2X8soV9I-MokWe1MXXo&usqp=CAU',
        alt: 'Limousin',
        maleHeight: '61 inches',
        maleWeight: '2866 lbs',
        femaleHeight: '57 inches',
        femaleWeight: '1874 lbs',
        general1: 'Originally from France, the Limousin is most commonly known for its long torso and muscularity. They are extremely popular for a couple reasons, one of them for meat. Because they have such a long torso, they are able to hold much more meat on them than other cattle. Take this attribute, add it to your favorite beef cow and you will automatically have more beef. Quality will vary.',
        general2: 'They are not just longer, but their bones are very large to hold all that extra weight that must be supported. This means that they altogether make for a large breed and will most likely need to be handled with caution.',
        general3: 'They mature somewhat early, and the bulls are very fertile. The cows are not nearly as wide as the bulls and therefore produce an easier birth than other cows.',
        general4: 'Their meat, although lean, is in high demand for the shear amount able to be yielded.',
        general5: '',
        special: 'Limousins are highly sought after by owners with large quality herds. Mostly for their ability to pack on size and yield more meat, they also produce enough milk for their calves to grow at fast rates. This means that they can help mother other calves that have lost their mothers. ',
        pattern1: 'Solid Blonde',
        pattern2: 'Solid Brown',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/limousin',
        source1: 'https://www.thecattlesite.com/breeds/beef/39/limousin/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getLincolnRed = (req, res, next) => {
    res.render('cattlePages/lincoln-red', {
        pageTitle: 'Lincoln-Red',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/lincolnredbull.jpg',
        alt: 'Lincoln-Red',
        maleHeight: '54 inches',
        maleWeight: '2403 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1653 lbs',
        general1: 'Lincoln Red cattle are from England. These cattle are give the herford and even the angus a run for their money. When it comes to meat yeilding, it produces more than herefords, but similar quality to angus. This type of cow should be considered a luxary beef cow. ',
        general2: 'Lincoln Reds are similar to herefords in the fact that they are similar size, and have meat production, birth rates, and breeding success percentages.',
        general3: 'Some of their characteristics include red hair, which helps with sun damage, and being polled. Polled meaning they don\'t really have any horns. They tend to be fairly docile, so this makes them nice to have when transporting or moving them from one location to another.',
        general4: 'It was made from two breeds, the Lincoln and Shorthorn. Although not much is known about the Lincoln, it\'s said to have been introduced to England from Scandanavia.',
        general5: '',
        special: 'Lincoln Red is medium in size but yields great quality meat and a decent amount of it. There is even a large club called the Lincoln Red Association. This club keeps records of all registered Lincoln Reds within the United States. All the pedigrees and proper breeding history is held by this group.',
        pattern1: 'Solid Red',
        pattern2: 'Red w/ Black head',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/lincoln-red',
        source1: 'https://www.thecattlesite.com/breeds/beef/26/lincoln-red/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getMarchigiana = (req, res, next) => {
    res.render('cattlePages/marchigiana', {
        pageTitle: 'Marchigiana',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Marchigianabull.jpg',
        alt: 'Marchigiana',
        maleHeight: '67 inches',
        maleWeight: '3307 lbs',
        femaleHeight: '65 inches',
        femaleWeight: '2205 lbs',
        general1: 'The Marchigiana are from Italy and have Chianina ancestars. They have similar traits, most of them being visual. They have all white skin or all grey skin with a black snout and black around their eyes.',
        general2: 'They are very large and strong. They have both a big frame and big bones to make up that frame. They are a good breed for yielding meat and can be fully ready for slaughter around fifteen to sixteen months of age.',
        general3: 'They are great cross breeders. A desired cross often times includes a Limousin. This produces a great amount of meat. Very lean and red meat. Not so much marbled like an Aberdeen Angus.',
        general4: 'They are disease resistant and climate adaptive, which is another reason cross breeding is desired. Mostly docile, this breed is great for big time ranchers who want a lot of lean meat yielding.',
        general5: '',
        special: 'Much lick the Chianina, the Marchigiana are tall and very large. This made them equally great for work as they are for food. They are known to be excellent workers, and because of their sweet or docile nature, are easier to handle than other breeds.',
        pattern1: 'Solid White',
        pattern2: 'Solid Grey',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/marchigiana',
        source1: 'https://www.thecattlesite.com/breeds/beef/65/marchigiana/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getMurrayGray = (req, res, next) => {
    res.render('cattlePages/murray-gray', {
        pageTitle: 'Murray-Gray',
        imageURL: 'https://www.sustainablegenetics.com/wp-content/uploads/2020/03/yankee.png',
        alt: 'Murray-Gray',
        maleHeight: '54 inches',
        maleWeight: '2502 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1500 lbs',
        general1: 'Murray Greys are another large breed of cattle. They originally come from Australia and are still one of the most popular breeds there today.  Once taken from Australia and brought to the United States, the Murray Grey thrived. They range in colors including grey, white and even a light black color.',
        general2: 'They are a decent size cow, but not too large. They have, not short, but shorter legs and are very easy to handle. They have a great temperament. Obviously this gives their owners a better time during transportaiton than other cattle. ',
        general3: 'Good milk is given to all their calves. They milk is not as rich as a highland\'s or a belted galloway\'s, but the amount of milk and decent quality always produces good sized calves at the end of their first year. ',
        general4: 'This bovine produces a very nice marbled meat. They are top quality and can be produced for little cost. Which of course, is always great news for a rancher/farmer. They are able to eat grass, or grain and give the same quality of meat.',
        general5: '',
        special: 'Because of its Australian origin, they have great hides and are easily made into material that can be used to make furniture, clothes and other items. Not often used as a dairy cow, they can produce enough millk to feed their own calf as well as help feed anothers. This provides farmers/ranchers with the option to milk them if wanted.',
        pattern1: 'White',
        pattern2: 'Grey',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/murray-gray',
        source1: 'https://www.thecattlesite.com/breeds/beef/59/murray-grey/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getPinzgauer = (req, res, next) => {
    res.render('cattlePages/pinzgauer', {
        pageTitle: 'Pinzgauer',
        imageURL: 'https://www.texascirclep.com/photos/herd%20sires/2011/DSC03764.jpg',
        alt: 'Pinzgauer',
        maleHeight: '54 inches',
        maleWeight: '2000 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1600 lbs',
        general1: 'The Pinzgauer is originally from Austria. The Celts introduced them, and for Europe and now the United Stated, they\'ve been a great bovine to have. They tend to be a dark red or chestnut color with white marks on the back and the tummy. They are a medium sized cow and with tender meat.',
        general2: 'Originally made to work, they are a strong breed. They have the ability to pack on muslce and meat. They stopped being working cattle because of recent technology, like tractors and harvestors, heavy machinery and more.',
        general3: 'They generally feed on grass, and fields. Which means they are a fairly easy to raise, especially free range with quality brush or foilage. They have some disease and bug resistence. This is nice for keeping healthy cows and making sure they\'re their owners vet bill stays low. ',
        general4: 'They have decent fertility rates. Which means they\'re able to breed and have healthy babies. They have good weaning capabilities so their babies get fairly large fairly quickly. They do not mature early, but becuase they grow at a decent rate, they tend to be a bit fatter before sending to market. This means the amount of meat is sometimes higher.',
        general5: '',
        special: 'One of the less common bovines in America, most people don\'t know they have quality meat, on parr with Angus. Some even say it\'s better. Though, because it\'s not as popular as other cattle, they are not usually grown in massive herds.',
        pattern1: 'Red w/ White',
        pattern2: 'Chestnut w/ White',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/pinzgauer',
        source1: 'https://www.thecattlesite.com/breeds/beef/63/pinzgauer/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getRedAngus = (req, res, next) => {
    res.render('cattlePages/red-angus', {
        pageTitle: 'Red-Angus',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/rangusbull1.jpg',
        alt: 'Red-Angus',
        maleHeight: '54 inches',
        maleWeight: '1984 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1400 lbs',
        general1: 'The Red Angus, commonly known as Angus, originated in Scotland. More specifically, almost 200 years ago (1824), the first breed of Angus came from North Eastern Scotland.',
        general2: 'Angus are well known for being hearty and resilient to weather. In fact, they can live comfortably in cold and warm climates. These climates range from snowy mountains to warm grassy plains and everything in between. The warmest temperature being 100 degrees Fahrenheit!',
        general3: 'They come in two colors, black and red. The red is more of a brownish red. Both colors are solid, so there are no spots or other patterns, other than solid black red.',
        general4: 'They are polled cattle, which means they do not grow horns like other cows. This is really convenient for ranchers/farmers because it makes Angus safer to handle, breed and transport.',
        general5: 'They are extremely desired for their meat to feed ratio and their high calving birth rates. This means Angus don\'t require high amounts of feed to produce quality meat. This breed of bovine also has high birth rates and mostly requires very little assistance from their owners. Most of the calves are able to move around and even walk within a matter of minutes.',
        special: 'Basically the same as black angus (see Aberdeen Angus), they have some longhorn blood in them, so that\'s where their red color comes from. Most of if not all the longhorn characteristics, besides the color, has been bred out of them. ',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/red-angus',
        source1: 'https://www.thecattlesite.com/breeds/beef/99/red-angus/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getRedPoll = (req, res, next) => {
    res.render('cattlePages/red-poll', {
        pageTitle: 'Red-Poll',
        imageURL: 'https://i.pinimg.com/originals/ce/27/39/ce273967f91ee078381b3bb33802d58c.jpg',
        alt: 'Red-Poll',
        maleHeight: '54 inches',
        maleWeight: '1800 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1200 lbs',
        general1: 'These cattle are dual purpose cows. That means they are used for both meat and milk. Mostly used for meat within the United States, they can be used to help feed other calves or calves that have lost their mothers. They don\'t produce enough to be considered a dairy cow, compared to Holsteins and Jeresys. ',
        general2: 'They are extremely docile, both the cows and bulls. They also have great quality meat, so that makes milking and meat production really nice for less experienced farmers/ranchers. This also makes them really nice for moving and trasporting these cattle.',
        general3: 'Corss breeding them, as mentioned earlier, help make descendants polled (do not have horns), but they also make for great temperament adjustments in herds. If a rancher/farmer or farmer has a well built bull with a bad attitude, a Red Poll would be a great breed to cross with. ',
        general4: 'These cattle have an exceptional endurance for cold. The harshest winters would not threaten this breed of cow like it would others who need any attention during blizzards and other icy/cold conditions. ',
        general5: '',
        special: 'The Red Poll is where the term "polled" comes from. These cattle do not have horns and are bred with other breeds so the cross breeds hopefully become polled as well. They actually look very similar to Red Angus, the main difference is a slight build and color difference in appearance.',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/red-poll',
        source1: 'https://www.thecattlesite.com/breeds/beef/51/red-poll/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getRomagnola = (req, res, next) => {
    res.render('cattlePages/romagnola', {
        pageTitle: 'Romagnola',
        imageURL: 'https://cattleinternationalseries.weebly.com/uploads/1/6/5/8/16581252/1358506945.jpg',
        alt: 'Romagnola',
        maleHeight: '62 inches',
        maleWeight: '2866 lbs',
        femaleHeight: '1500 lbs',
        femaleWeight: '57 inches',
        general1: 'Originally from Italy, this bovie started out as a wild breed that eventually became domestic.These cattle are big and have some muscle. They can be used as working cattle and have the ability to perform well under heavy loads.',
        general2: 'Leaner meat, but still great quality. Doesn\'t have that marbled effect like Angus, but still high quality. Generally tender, a farmer/rancher would not turn down a steak made from this cow.',
        general3: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Romagnola usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy. Producing enough milk to feed their babies, but not enough to be solely used as a dairy cow, Romagnola cows have good quality milk. They usually have enough to make their calves fat and happy.',
        general4: 'The Romagnola are horned so a farmer/rancher will need to be careful, even if they know the cow is gentle. However, they do tend to have a docile or mild temperament. Which makes it wonderful when trying to move or transport a numerous amount of cattle all at once.',
        general5: '',
        special: 'Throuhgout history, the Romagnola breed of cattle assisted humans in times of draught. They helped till and work the land, at the same time making the best of what they had of low quality grazing foilage. This made them the perfect work animal, expecially in times when the ability to feed these animals was scarce.',
        pattern1: 'Solid White',
        pattern2: 'White with Black Shoulders',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/romagnola',
        source1: 'https://www.thecattlesite.com/breeds/beef/64/romagnola/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getSantaGertrudis = (req, res, next) => {
    res.render('cattlePages/santa-gertrudis', {
        pageTitle: 'Santa-Gertrudis',
        imageURL: 'https://petkeen.com/wp-content/uploads/2021/12/Santa-Gertrudis_Celso-Margraf_Shutterstoock.jpg',
        alt: 'Santa Gertrudis',
        maleHeight: '54 inches',
        maleWeight: '2205 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1874 lbs',
        general1: 'Originally from Texas, Santa Gertrudis were named after a land grant by Captain Richard King. They thrive on mostly grass, which makes them ideal for low cost without suffering meat producibility.',
        general2: 'These cows can either be horned or polled, which means they don\'t grow any horns. If they are polled, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns. If they have horns a farmer/rancher will need to be careful, even if they know the cow is gentle.',
        general3: 'This breed of cow is very healthy and has a resistance to both diseases and some bugs. This is actually from a thick hide they have. This breed of cow is very adaptable and can withstand most temperatures. This makes Santa Gertrudis a very desirable breed of cow when cross breeding or relocating for whatever reason. ',
        general4: 'They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Santa Gertrudis usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy. This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities.',
        general5: '',
        special: 'Not just able to graze on grass, these cows have quite the knack for foraging druing rough times or in poor quality foilage. They have a nice hide that can be turned into wonderful working materials. Working materials in particular because of its thickness and durability. Perfect for chaps, gloves, vests, hats, and more. ',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/santa-gertrudis',
        source1: 'https://www.thecattlesite.com/breeds/beef/69/santa-gertrudis/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getSenepol = (req, res, next) => {
    res.render('cattlePages/senepol', {
        pageTitle: 'Senepol',
        imageURL: 'https://www.bovine-elite.com/wp-content/uploads/2020/07/WC-112N-e1595512703400.jpg',
        alt: 'Senepol',
        maleHeight: '54 inches',
        maleWeight: '2050 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1453 lbs',
        general1: 'Original descendants from N\'Dama (cattle native to African ) and Red Poll cattle, Senepol were created fairly recently, only as far back as the 1960\'s. Being a cross breed from an African cattle, this breed enjoys the heat and can quite comfortably enjoy the hot sun without needing a refreshing bath in some cold water.',
        general2: 'Naturally polled, meaning these cows do not naturally grow horns, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns. Senepol have a docile or mild temperament. Which makes it wonderful when trying to move or transport a numerous amount of cattle all at once.',
        general3: 'This breed of cow is very healthy and has a resistance to both diseases and some bugs. Leaner meat, but still great quality. Doesn\'t have that marbled effect like Angus, but still high quality. Generally tender, a farmer/rancher would not turn down a steak made from this cow.',
        general4: 'They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Senepol usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy. These calves grow very quickly and tend to put on a couple pounds everyday. This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities.',
        general5: '',
        special: 'Being part short horn, the Senepol have the ability to produce better milking capabilities than their African ancestors. Their African ancestors were only used for meat in the most extremely hot conditions. Producing enough milk to feed their babies, but not enough to be solely used as a dairy cow, Senepol cows have good quality milk. They usually have enough to make their calves fat and happy.',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/senepol',
        source1: 'https://www.thecattlesite.com/breeds/beef/81/senepol/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getSouthDevon = (req, res, next) => {
    res.render('cattlePages/south-devon', {
        pageTitle: 'South-Devon',
        imageURL: 'https://www.cfgphoto.com/data/media/435/CFG9127.jpg',
        alt: 'South-Devon',
        maleHeight: '60 inches',
        maleWeight: '2522 lbs',
        femaleHeight: '55 inches',
        femaleWeight: '1764 lbs',
        general1: 'Originally from England, these cattle have been around for almost 400 years. These cattle are big and have some muscle. They can be used as working cattle and have the ability to perform well under heavy loads. Originally bred for working, task like plowing, hauling heavy loads and making their owners have less troubles completing difficult tasks was in their blood.',
        general2: 'These cattle are big and have some muscle. They can be used as working cattle and have the ability to perform well under heavy loads. Naturally polled, meaning these cows do not naturally grow horns, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns. South Devons have a docile or mild temperament. Which makes it wonderful when trying to move or transport a numerous amount of cattle all at once.',
        general3: 'They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. South Devons usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy. Producing enough milk to feed their babies, but not enough to be solely used as a dairy cow, South Devons cows have good quality milk. They usually have enough to make their calves fat and happy.',
        general4: '',
        general5: '',
        special: 'This breed of Bovine is considered one of the only cattle that is a triple purpose cow. That means it\'s meant for milk, meant and butterfat. Now there are more than a couple breeds of cattle out there that are dual purpose, or at least have the potential to be dual prupose. But because this cow produces such fat rich milk, most of that fat can be made into butter. So it not only produces lots of milk, but lots of fatty milk. Pretty awesome if you think about it.',
        pattern1: 'Solid Brown',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/south-devon',
        source1: 'https://www.thecattlesite.com/breeds/beef/98/south-devon/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getSussex = (req, res, next) => {
    res.render('cattlePages/sussex', {
        pageTitle: 'Sussex',
        imageURL: 'https://neweralive.na/storage/uploads/2020/11/sussex-2.jpg',
        alt: 'Sussex',
        maleHeight: '57 inches',
        maleWeight: '2094 lbs',
        femaleHeight: '53 inches',
        femaleWeight: '1290 lbs',
        general1: 'Originally from Sussex, England, hence the name Sussex, they are said to be descendants of some horned red cows. Becuase this description is so vague, noone actually knows where these cattle came from.',
        general2: 'Though not a very large breed of cattle, the Sussex bovine were bred for working, task like plowing, hauling heavy loads and making their owners have less troubles completing difficult tasks was in their blood. They may not have been able to move the heaviest of loads, but they tend to be strong, especially for their size and weight.  have a docile or mild temperament. Which makes it wonderful when trying to move or transport a numerous amount of cattle all at once.',
        general3: 'As mentioned previously, their ancestors were thought to be horned, but today the Sussex bovines are polled. Naturally polled, meaning these cows do not naturally grow horns, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.',
        general4: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Sussex usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy. ',
        general5: '',
        special: 'Sussex cattle have the ability to live long lives. This is accredited to their medium size builds and their need for milder climates. They are not a very active cow, so this would decrease the amount of pressure and stress put on their joints, bones and muscles. This would leave more nutrition for growth and longevity.They ',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/sussex',
        source1: 'https://www.thecattlesite.com/breeds/beef/29/sussex/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getTarentaise = (req, res, next) => {
    res.render('cattlePages/tarentaise', {
        pageTitle: 'Tarentaise',
        imageURL: 'https://cattleinternationalseries.weebly.com/uploads/1/6/5/8/16581252/1828199.jpg?361',
        alt: 'Tarentaise',
        maleHeight: '54 inches',
        maleWeight: '1500',
        femaleHeight: '49 inches',
        femaleWeight: '900',
        general1: 'Tarentaise cattle originated in the mountains of France. Originally selectively bred for milk, these cattle needed to work harder and haul heavier loads. With that said, they were eventually selected for meat. This made them bigger, stronger, and able to pack on more weight.',
        general2: 'These cattle are big and have some muscle. Tasks like plowing, hauling heavy loads and making their owners have less troubles completing difficult tasks was in their blood. Also being selectively for being polled,  these cows do not naturally grow horns, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.',
        general3: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Tarentaise births fairly easily. They don\'t normally need assistance, and their calves are generally healthy. Producing enough milk to feed their babies, but not enough to be solely used as a dairy cow, Tarentaise cows have good quality milk.',
        general4: '',
        general5: '',
        special: 'Because Tarentais were originally bred for milk, they have actually kept the ability to produce more milk with high quality. Again, not enough to be considered a milk cow, like Holsteins or Jeresys, they do produce more than enough for their calfs to become fat. The cows tend to have a very strong motherly affection and protection for their young. This makes them perfect for growing large herds. Having such traits in cows will ensure a higher amount of calves reaching weight on a more standard schedule.',
        pattern1: 'Solid Reddish Brown.',
        pattern2: 'Red w/ Black Shoulders',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/tarentaise',
        source1: 'https://www.thecattlesite.com/breeds/beef/47/tarentaise/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getTexasLonghorn = (req, res, next) => {
    res.render('cattlePages/texas-longhorn', {
        pageTitle: 'Texas-Longhorn',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Texas%20Longhorn1.jpg',
        alt: 'Texas-Longhorn',
        maleHeight: '72 inches',
        maleWeight: '1500 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1200 lbs',
        general1: 'The Texas Longhorn was bred in America from cattle that were originally brought to the US around 500 years ago. They only have crazy long horns from natural selection and adaptation to their environments. The original "pure breeds" of the Longhorn were almost completely bred out by the early 1900\'s. Thankfully, people saw this and decided to tighten breeding selections and the longhorn today is closer to what was seen before 1900.',
        general2: 'Tender beef is what\'s given to the rancher/farmer. This cow produces a leaner meat, but still high quality. It\'s said that anyone who has had the opportunity to eat Longhorn meat will declare it\'s still juicy and extremely delicious. Their meat is far from being the only element valued by customers. Their hides and horns are just as important. Considered the most western-esque material around, people often fancy themselves real cowboys with items made from Longhorns.',
        general3: 'These cattle tend to be extrememly docile around people, they are also known to be intelligent. Even if they are docile, they will become overly aggressive if felt threatened. Those horns are not only used for show, and will be used as spears. Being horned, obviously, a farmer/rancher will need to be VERY careful, even if they know their cattle are gentle. This breed of cow is very healthy and has a resistance to both diseases and some bugs. ',
        general4: 'They thrive on mostly grass and other foilage found in their vicinity, which makes them ideal for low cost without suffering meat producibility. This breed of cow is very adaptable and can withstand most temperatures. ',
        general5: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Longhorns usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.',
        special: 'Texas Longhorns are an iconic cow, especially for the West. These cattle can be seen as in old western movies, they are often mascots in Texas, icons for various items, or logos for businesses. Their horns are definitely a large statement. Some people even go as far to put their horns on the front hood of cars or trucks. Owners of Texas Longhors tend to share the greatest length of the longest set of horns within their herd. It\'s also a popular cow to ride in modern day Texas.',
        pattern1: 'Solid Black or White',
        pattern2: 'Solid Red or Brown',
        pattern3: 'Solid Tan or Brown',
        pattern4: 'Solid Red or Roan',
        pattern5: 'Speckeled w/ any colors previously mentioned above.',
        path: 'cattlePages/texas-longhorn',
        source1: 'https://www.thecattlesite.com/breeds/beef/18/texas-longhorn/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getWagyu = (req, res, next) => {
    res.render('cattlePages/wagyu', {
        pageTitle: 'Wagyu',
        imageURL: 'data:image/jpeg;base64,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',
        alt: 'Wagyu',
        maleHeight: '55 inches',
        maleWeight: '1764 lbs',
        femaleHeight: '50 inches',
        femaleWeight: '1102 lbs',
        general1: 'Originally from Japan, Wagyu translates to "Japanese Cattle". They tend to be black or red, but often cross breeds of black and red result in solid black with dark cherry red patches. They are very docile, known for their peacful actions when handling and transporting. They are not polled, but have smaller horns that curve forward, so caution must be taken.',
        general2: 'Wagyu and the specialised growing techniques have given rise to the famous Kobe beef, which is a very tender, very marbled beef carcase. They are considered healthy cattle. This breed of cow is very adaptable and can withstand a variety of climates. This makes Wagyu a very desirable breed of cow for high end herd owners. ',
        general3: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Wagyu usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.',
        general4: '',
        general5: '',
        special: 'Wagyu cattle are prized for their meat and tend to be very expensive. The most expensive meat is often advertized as "grass-fed". This means the cow has soley grazed and aten grass its entire life. There are actully a couple variety of Wagyu cattle, the original are solid black. The second were actually raised in Korea and have more of a reddish color to them. The first 4 Wagyu cattle imported to the US were two Black Wagyu (Japanese) and two red Wagyu (Korean).',
        pattern1: 'Solid Black',
        pattern2: 'Solid Red',
        pattern3: 'Solid Black w/ Red',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/wagyu',
        source1: 'https://www.thecattlesite.com/breeds/beef/49/wagyu/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getWatusi = (req, res, next) => {
    res.render('cattlePages/watusi', {
        pageTitle: 'Watusi',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/watusibull.jpg',
        alt: 'Watusi',
        maleHeight: '54 inches',
        maleWeight: '1609 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1213 lbs',
        general1: 'Originally from Africa, the cattle they descended from were from Egypt (Egyptian Longhorn), Pakistan and India (Longhorn Zebu). With such ancestors, they endure through the heat extremely well. Besides extreme heat, they can thrive in docile climates that don\'t get too cold. ',
        general2: 'Leaner meat, but still great quality. Doesn\'t have that marbled effect like Angus, but still high quality. This breed of cow is very healthy and has a resistance to both diseases and some bugs. The Watusi are horned, obviously, so a farmer/rancher will need to be careful, even if they know the cow is gentle.',
        general3: 'They thrive on mostly grass, which makes them ideal for low cost without suffering meat producibility. Producing enough milk to feed their babies, but not enough to be solely used as a dairy cow, Watusi cows have decent quality milk.',
        general4: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Watusi usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.',
        general5: '',
        special: 'The Watusi in Africa were, and in some areas still considered, sacred. They were primarily used for milk and status. African Chieftains and Kings had a number of them to show wealth and prosperity. They are not humped or also known as humpless cattle. Even the bulls do not have humps on thier shoulders. They are actually closer to Texas Longhorn in terms of visual characteristics.',
        pattern1: 'Solid Red',
        pattern2: 'Solid Black',
        pattern3: 'Solid Brown',
        pattern4: 'Spotted',
        pattern5: '',
        path: 'cattlePages/watusi',
        source1: 'https://www.thecattlesite.com/breeds/beef/85/watusi/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getZebu = (req, res, next) => {
    res.render('cattlePages/zebu', {
        pageTitle: 'Zebu',
        imageURL: 'https://i.pinimg.com/originals/a6/88/43/a688437ff2e171da47071a53ec1620a7.png',
        alt: 'Zebu',
        maleHeight: '42 inches',
        maleWeight: '600 lbs',
        femaleHeight: '35 inches',
        femaleWeight: '500 lbs',
        general1: 'Zebu originated in Southwest Asia.They have a large hump. This hump is actually used for holding water for storage. Storing water is essential for cattle in hot climates with low water sources. The cow will pull water from the water stored in their hump to stay hydrated',
        general2: 'These cattle are one of the smallest cattle but have some muscle. Tasks like plowing, hauling semi-heavy loads and making their owners have less troubles completing difficult tasks was in their blood. The Zebu are horned so a farmer/rancher will need to be careful, even if they know the cow is gentle.',
        general3: 'Also, it\'s great for cross breeding because it has a high tolerance for heat. This breed enjoys the heat and can quite comfortably enjoy the hot sun without needing a refreshing bath in some cold water.',
        general4: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Zebu usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy. ',
        general5: '',
        special: 'Zebu, believe it or not, are the largest commercial herd in the entire world. Becuase of its great ability to cope with heat, they can be a main cattle choice in India, Brazil, Africa and even Australia. Similar to the Brahman, they have longer ears and a lot of loose skin around their neck. All that loose skin makes it easy for them to release heat.',
        pattern1: 'Gray wi/ Black Shoulders',
        pattern2: 'Red w/ Black Shoulders',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/zebu',
        source1: 'https://www.thecattlesite.com/breeds/beef/76/zebu/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getAyrshire = (req, res, next) => {
    res.render('cattlePages/ayrshire', {
        pageTitle: 'Ayrshire',
        imageURL: 'https://i.ytimg.com/vi/ntQnfak-8cM/hqdefault.jpg',
        alt: 'Ayrshire',
        maleHeight: '53 inches',
        maleWeight: '2000 lbs',
        femaleHeight: '50 inches',
        femaleWeight: '1300 lbs',
        general1: 'Originally from Scottland, established in 1812, it\'s commonly referred to as the "Dunlop". The Ayrshire are horned so a farmer/rancher will need to be careful, even if they know the cow is gentle. Most of the time, however, commercial and show Ayrshires are dehorned at birth. ',
        general2: 'Mainly used for milk, these cattle are not very large and are considered medium size cows. Though not large, they are rugged and meant to handle rough terrain. Few milk cows have the foraging ability Ayrshires have. ',
        general3: 'Producing large amounts of milk, they are commercially used to fulfill societal needs for milk. Usually in feedlots and dairies, they can produce more than enough for their calves and the farmers. Butterfat quality is fine, but the amount is not the largest. This means that cheese and other cream products are produced on a much smaller scale. ',
        general4: 'This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Ayrshire usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.',
        general5: '',
        special: 'Ayrshire milk is commonly most sought after. More so than Holstein and Dairy for two main reasons. One, they milk is not overly rich. Two, they fat is more evenly spread throughout the milk. This means that other dairy products made from Ayrshire milk tend to be higher quality. Or at least seem more popular with higher community acceptance. Ice cream, cheese, yogurt, etc. are all products that people would rather have made with Ayrshire milk.',
        pattern1: 'Red and White',
        pattern2: 'Dark Red and White',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/ayrshire',
        source1: 'https://www.thecattlesite.com/breeds/beef/19/ayrshire/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getBrownSwiss = (req, res, next) => {
    res.render('cattlePages/brown-swiss', {
        pageTitle: 'Brown-Swiss',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/brown1.jpg',
        alt: 'Brown-Swiss',
        maleHeight: '57 inches',
        maleWeight: '2000 lbs',
        femaleHeight: '53 inches',
        femaleWeight: '1400 lbs',
        general1: 'Originally from Switzerland, the Brown Swiss is the largest dairy cow breed in existence. They are usually brown, gray or white. Brown Swiss are highly regareded for their milk. It is "coveted" by cheese makers. The sheer volume of milk plus the high amount of proteins make this milk the best for creating cheese.',
        general2: 'This breed of bovine matures very  early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Brown Swiss usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.',
        general3: 'Brown Swiss have a docile or mild temperament. Which makes it wonderful when trying to move or transport a numerous amount of cattle all at once. This cow is great for cross breeding. Most of the female offspring mature very early, which allows a faster return on investments for the famer/rancher.',
        general4: 'Brown Swiss can be both polled and horned. If horned, a farmer/rancher will need to be careful, even if they know the cow is gentle. If polled,  they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.',
        general5: '',
        special: 'Brown Swiss are one of the earliest maturing cattle. In fact, almost 100% of cows are pregnant at only 550 days old! that\'s only a year and a half old!',
        pattern1: 'Solid Dark Grey',
        pattern2: 'Solid White',
        pattern3: 'Solid Light Grey',
        pattern4: 'Solid Grayish Brown',
        pattern5: '',
        path: 'cattlePages/brown-swiss',
        source1: 'https://www.thecattlesite.com/breeds/beef/31/brown-swiss/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getDairyShorthorn = (req, res, next) => {
    res.render('cattlePages/dairy-shorthorn', {
        pageTitle: 'Dairy-Shorthorn',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Dairy%20Shorthorn%20Cow.jpg',
        alt: 'Dairy-Shorthorn',
        maleHeight: '54 inches',
        maleWeight: '2100 lbs',
        femaleHeight: '55 inches',
        femaleWeight: '1500 lbs',
        general1: 'Dairy Shorthorn, just like Beef Shorthorn, origniated in England. Colors usually include solid red, solid white, or are red and white. Dairy Shorthorns tend to have quite the calm temperament. In fact, the bulls are also very tame and can be used to keep other breed of cows calm. This is great for dairy farmers and ranchers without a lot of threats to their herds.',
        general2: "Brown Swiss can be both polled and horned. If horned, a farmer/rancher will need to be careful, even if they know the cow is gentle. If polled,  they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.",
        general3: "This breed of cow is very healthy and has a resistance to both diseases and some bugs. There was a study done on multiple cattle breeds, including Dairy Shorthorn over a 13 year period. Turns out that Dairy Shorthorns were less susceptible to diseases that other cows contracted. This is great news for dairy farmers with lots of Dairy Shorthorns and their cross breeds. ",
        general4: "This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Dairy Shorthorns usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.",
        general5: "",
        special: 'Dairy Shorthorns do have a good protein to fat within their milk. This means that they are able to have their milk marketed to customers for yogurt, cheese and other dairy products. ',
        pattern1: 'Solid Red',
        pattern2: 'Red and White',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/dairy-shorthorn',
        source1: 'https://www.thecattlesite.com/breeds/beef/36/dairy-shorthorn/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getFriesian = (req, res, next) => {
    res.render('cattlePages/friesian', {
        pageTitle: 'Friesian',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/friesiancow.jpg',
        alt: 'Friesian',
        maleHeight: '62 inches',
        maleWeight: '1900 lbs',
        femaleHeight: '57 inches',
        femaleWeight: '1300 lbs',
        general1: 'Thought to originate from Holland and Friesland, thier ancestors were disease ridden and overcame with floods. So they came from some mysterious white and black cow from Northern Europe and cross bred with Dutch Cattle.',
        general2: "Producing large amounts of milk, they are commercially used to fulfill societal needs for milk. Usually in feedlots and dairies, they can produce more than enough for their calves and the farmers.",
        general3: "Naturally polled, meaning these cows do not naturally grow horns, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.",
        general4: "This breed of cow is very healthy and has a resistance to both diseases and some bugs. This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. Friesians usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.",
        general5: "",
        special: 'These cows are mostly in the Netherlands these days. If you have read about the Dutch Belted cattle, it\'s understandable that these cows are not in a lot of place in the world. But the UK and the US were able to receive some from the Netherlands. Here in the United States, we were able to cross breed these cows to better help our milk yielding from various dairy cows.',
        pattern1: 'White and Black',
        pattern2: 'White and Red',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/friesian',
        source1: 'https://www.thecattlesite.com/breeds/beef/24/friesian/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getGuernsey = (req, res, next) => {
    res.render('cattlePages/guernsey', {
        pageTitle: 'Guernsey',
        imageURL: 'data:image/jpeg;base64,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',
        alt: 'Guernsey',
        maleHeight: '57 inches',
        maleWeight: '1543 lbs',
        femaleHeight:'48 inches',
        femaleWeight: '1102 lbs',
        general1: 'Guernsey cattle were produced in England, just off the coast of France, although it cannot be proven they existed before the 19th century. The Nordic and Viking civilizations were thought to have a few of their own variety of Guernsey cattle.',
        general2: "These cattle can be both horned or polled, it just depends on their genetics. If horned, a farmer/rancher will need to be careful, even if they know the cow is gentle. If polled, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.",
        general3: "This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. They usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.",
        general4: "",
        general5: "",
        special: 'Guernsey\'s renown as an unique producer of rich yellow coloured milk gave her the title "Golden Guernsey". Highly renowned for thier milk and temperament, these cows love to give milk. Guernsey cows are often sought out by beginners, but can become overwhelmed soo after with the amount of milk produced by the Guernsey.',
        pattern1: 'Brown and White',
        pattern2: 'Blonde and White',
        pattern3: 'Red and White',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/guernsey',
        source1: 'https://www.thecattlesite.com/breeds/beef/21/guernsey/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getHolstein = (req, res, next) => {
    res.render('cattlePages/holstein', {
        pageTitle: 'Holstein',
        imageURL: 'data:image/jpeg;base64,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',
        alt: 'Holstein',
        maleHeight: '59 inches',
        maleWeight: '1800 lbs',
        femaleHeight: '56 inches',
        femaleWeight: '1300 lbs',
        general1: 'Holsteins originated in England. THey are one of the most common and well known dairy cows in the United States. Dairy Farms all across the country can be seen hosting hundreds of thes cows.',
        general2: "This breed of cow produces an enormous amount of milk and absolutely needs to be milked twice a day. Especially, commercial cows from this breed, the shear volume produced is more than enough to provide 3 or more markets with milk. Of course this all depends on the number of cows used. But simply 50 of these cows could stock 3 markets daily.",
        general3: "These cattle can be both horned or polled, it just depends on their genetics. If horned, a farmer/rancher will need to be careful, even if they know the cow is gentle. If polled, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.",
        general4: "This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. They usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.",
        general5: "",
        special: 'Holsteins are a very popular ow to enter into beauty pageants also known as \"shows\". They parade the cow around in an arena. Show the quality of visual characteristics including hair, color, muscle, hoofs and more.',
        pattern1: 'Black and White',
        pattern2: 'Brown and White',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/holstein',
        source1: 'https://www.thecattlesite.com/breeds/beef/22/holstein/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getJersey = (req, res, next) => {
    res.render('cattlePages/jersey', {
        pageTitle: 'Jersey',
        imageURL: 'https://bellvalefarms.com/wp-content/uploads/2021/03/funky.jpg',
        alt: 'Jersey',
        maleHeight: '54 inches',
        maleWeight: '2000 lbs',
        femaleHeight: '47 inches',
        femaleWeight: '1500 lbs',
        general1: 'Jersey cows, despite their name, are not actually from New Jersey, United States. They were first landed in New Jersey when brought to the United States, but no one knows where they were sent from. Quality milkers, farmers were never going to return to sender.',
        general2: "This breed of cow produces an enormous amount of milk and absolutely needs to be milked twice a day. Especially, commercial cows from this breed, the shear volume produced is more than enough to provide 3 or more markets with milk. Of course this all depends on the number of cows used. But simply 50 of these cows could stock 3 markets daily.",
        general3: "These cattle can be both horned or polled, it just depends on their genetics. If horned, a farmer/rancher will need to be careful, even if they know the cow is gentle. If polled, they are easier or more convenient to move, work or transport. Being polled also makes these cows less of a burden for farmers/ranchers who need to constantly trim horns.",
        general4: "This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. They usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.",
        general5: "",
        special: 'Now In countried around the world, including South Africa and New Zealand, They are one of if not the most effective milk producer. To make one pound of milk, it takes less amount of grass to provide than other cows need to ingest. Their milk is also the most nutritious.',
        pattern1: 'Solid Brown',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/jersey',
        source1: 'https://www.thecattlesite.com/breeds/beef/23/jersey/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getMilkingDevon = (req, res, next) => {
    res.render('cattlePages/milking-devon', {
        pageTitle: 'Milking-Devon',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Milking%20Devon%20Cow.jpg',
        alt: 'Milking-Devon',
        maleHeight: '54 inches',
        maleWeight: '1700 lbs',
        femaleHeight: '48 inches',
        femaleWeight: '1200 lbs',
        general1: 'The Milking Devon that was bred in the United States, derived from the Devon. The Devon had the same ancestors as the Hereford and Sussex. These cattle have been in a few westerns themselves. Old Yeller had only one cow in it and a Milking Devon was it.',
        general2: "They have a docile or mild temperament. Which makes it wonderful when trying to move or transport a numerous amount of cattle all at once. High quality, this breed\'s meat is bound to make a delicious steak and a profit for its owner. They thrive on mostly grass, which makes them ideal for low cost without suffering meat producibility.",
        general3: "The Milking Devon are horned so a farmer/rancher will need to be careful, even if they know the cow is gentle. This breed of cow is very healthy and has a resistance to both diseases and some bugs. ",
        general4: "This breed of bovine matures fairly early, and that means quicker breeding and milking capabilities. They don\'t normally have troubles with breeding and rarely need human intervention to grow a herd. Milking Devon usually births fairly easily. They don\'t normally need assistance, and their calves are generally healthy.",
        general5: "",
        special: 'The Milking Devon may be considered the Texas Longhorn of the milk cows. They have horns and know how to use them. Previously mentioned, they do have minor or mild temperaments, but they have a very strong maternal instinct. They will fend off wolves and other predators just to try and keep their calves alive. But if they see the farmer or rancher as a friend, they should have no issues with this cow.',
        pattern1: 'Solid Red',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/milking-devon',
        source1: 'https://www.thecattlesite.com/breeds/beef/35/milking-devon/',
        source2: '',
        source3: '',
        source4: ''
      });
  };

  exports.getMilk = (req, res, next) => {
    res.render('milk', {
        pageTitle: 'Milk Cattle',
        path: '/milk',
      });
  };

  exports.getWork = (req, res, next) => {
    res.render('work', {
        pageTitle: 'Working Cattle',
        path: '/work',
        source1: 'https://www.pinterest.com/pin/523121312941873815/',
        source2: 'https://torontosavvy.me/2021/02/12/happy-new-year-2021-to-chinese-neighbours-and-friends-its-the-year-of-the-oxen/',
        source3: 'https://munduspress.world/mundusblog',
        source4: 'https://www.youtube.com/watch?v=YQILg_iGYVw',
        source5: 'https://images.ourontario.ca/almaguin/fullimage.asp?ID=67975&ifid=158929',
        source6: 'https://www.agdaily.com/lifestyle/the-abcs-of-working-cattle-easily/',
        source7: 'https://en.wikipedia.org/wiki/Plough',
        source8: '',
        source9: '',
        source10: ''
      });
  };
  
  exports.getSports = (req, res, next) => {
    res.render('sports', {
        pageTitle: 'Sports Cattle',
        path: '/sports',
        source1: 'https://en.wikipedia.org/wiki/Bovine_sports#:~:text=Bovine%20bingo%20is%20usually%20a,prize%20money%20or%20other%20awards.',
        source2: 'https://www.greatfallstribune.com/story/sports/2018/12/03/montana-bulldoggers-among-contenders-national-finals-rodeo-las-vegas/2196848002/',
        source3: 'https://www.pinterest.com/pin/230105862180456054/?mt=login',
        source4: 'https://www.thefencepost.com/news/steer-wrestling-cheyennes-other-roughstock-event/',
        source5: 'https://wallsheaven.com/photos/bull-rodeo-cowboy/p/4',
        source6: 'https://www.youtube.com/embed/bY65x5nQydw',
        source7: 'https://www.youtube.com/embed/21ynKDC93VY?start=48&end=98',
        source8: '',
        source9: '',
        source10: ''
      });
  };

  exports.getHide = (req, res, next) => {
    res.render('hide', {
        pageTitle: 'Hide Cattle',
        path: '/hide',
        source1: 'https://www.etsy.com/listing/1124419377/dark-brown-cowhide-rug-extra-small-50-x',
        source2: 'https://ebuy3u.tk/ProductDetail.aspx?iid=214301576&pr=84.88',
        source3: 'https://holmesandhide.com/products/salta-cowhide-wallet-with-tooling-details',
        source4: 'https://ecowhides.com/products/brown-and-white-cowhide-pillow',
        source5: 'https://www.westernerinc.com/products/corral-womens-hair-on-cowhide-boots',
        source6: 'https://www.cowboykurt.com/en/chaps/chinks-cowhide-brown-plain-conchos-unisex-k-bar-j-leather',
        source7: 'https://best.cheaponline2022.ru/content?c=cow%20skin%20vest&id=13',
        source8: 'https://cowhideoutlet.com/blog/what-kinds-of-products-are-made-from-cowhides/#:~:text=Cowhide%20is%20an%20extremely%20durable,it%20is%20unique%20and%20beautiful.',
        source9: 'https://en.wikipedia.org/wiki/Cowhide',
        source10: ''
      });
  };

  exports.getAll = (req, res, next) => {
    res.render('all', {
        pageTitle: 'All Cattle',
        path: '/all'
      });
  };