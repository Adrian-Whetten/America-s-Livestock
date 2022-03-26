  exports.getHome = (req, res, next) => {
    res.render('home', {
        pageTitle: 'America\'s Cattle',
        path: '/'
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
        general5: 'They are extremely desired for their meat to feed ratio and their high calving birth rates. This means Angus don\'t require high amounts of feed to produce quality meat. This breed of bovine also has high birth rates and mostly requires very little assistance from their owners. Most of the calves are able to move around and even walk within a matter of minutes.',
        special: 'Aberdeen Angus cattle are naturally polled and can be black or red in colour although black is the dominant colour, white may occasionally appear on the udder. They are resistant to harsh weather, undemanding, adaptable, good natured, mature extremely early and have a high carcass yield with nicely marbled meat. Angus are renowned as a carcass breed. They are used widely in crossbreeding to improve carcass quality and milking ability. Angus females calve easily and have good calf rearing ability. They are also used as a genetic dehorner as the polled gene is passed on as a dominant characteristic.',
        pattern1: 'Solid Black',
        pattern2: 'Solid Red',
        pattern3: '',
        pattern4: '',
        pattern5: '',
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
        path: 'cattlePages/aubrac'
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
        path: 'cattlePages/barzona'
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
        path: 'cattlePages/beefalo'
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
        path: 'cattlePages/beef-master'
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
        path: 'cattlePages/beef-shorthorn'
      });
  };

  exports.getBelgianBlue = (req, res, next) => {
    res.render('cattlePages/belgian-blue', {
        pageTitle: 'Belgian-Blue',
        imageURL: 'https://images.saymedia-content.com/.image/t_share/MTc0MDY5MjcxMTMwMDIzNDkw/super-cow.jpg',
        alt: 'Belgian-Blue',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/belgian-blue'
      });
  };

  exports.getBeltedGalloway = (req, res, next) => {
    res.render('cattlePages/belted-galloway', {
        pageTitle: 'Belted-Galloway',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/beltiebull.jpg',
        alt: 'Belted-Galloway',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/belted-galloway'
      });
  };

  exports.getBlondeDAquitaine = (req, res, next) => {
    res.render('cattlePages/blonde-d-aquitaine', {
        pageTitle: 'Blonde-d\'Aquitaine',
        imageURL: 'https://i.pinimg.com/originals/a6/43/32/a6433219253ccf9b5a7780ced0c769b0.jpg',
        alt: 'Blonde-d\'Aquitaine',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/blonde-d-aquitaine'
      });
  };

  exports.getBraford = (req, res, next) => {
    res.render('cattlePages/braford', {
        pageTitle: 'Braford',
        imageURL: 'https://i.pinimg.com/originals/c0/12/f8/c012f8861b7e4c0bac99071f71572427.jpg',
        alt: 'Braford',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/braford'
      });
  };

  exports.getBrahman = (req, res, next) => {
    res.render('cattlePages/brahman', {
        pageTitle: 'Brahman',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/brahmanbull1.jpg',
        alt: 'Brahman',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/brahman'
      });
  };

  exports.getBrahmousine = (req, res, next) => {
    res.render('cattlePages/brahmousine', {
        pageTitle: 'Brahmousine',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/brahmousinbull1.jpg',
        alt: 'Brahmousine',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/brahmousine'
      });
  };

  exports.getBrangus = (req, res, next) => {
    res.render('cattlePages/brangus', {
        pageTitle: 'Brangus',
        imageURL: 'https://www.bovine-elite.com/wp-content/uploads/2016/10/New-Blood-50H-2019-c.jpg',
        alt: 'Brangus',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/brangus'
      });
  };

  exports.getBuelingo = (req, res, next) => {
    res.render('cattlePages/buelingo', {
        pageTitle: 'Buelingo',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/buelingobull.jpg',
        alt: 'Buelingo',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/buelingo'
      });
  };

  exports.getCharolais = (req, res, next) => {
    res.render('cattlePages/charolais', {
        pageTitle: 'Charolais',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Charolais%20Bull.jpg',
        alt: 'Charolais',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/charolais'
      });
  };

  exports.getChianina = (req, res, next) => {
    res.render('cattlePages/chianina', {
        pageTitle: 'Chianina',
        imageURL: 'https://farmow.com/article-image/1600423287.jpg',
        alt: 'Chianina',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/chianina'
      });
  };

  exports.getComposite = (req, res, next) => {
    res.render('cattlePages/composite', {
        pageTitle: 'Composite',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/compositebull.jpg',
        alt: 'Composite',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/composite'
      });
  };

  exports.getCorriente = (req, res, next) => {
    res.render('cattlePages/corriente', {
        pageTitle: 'Corriente',
        imageURL: 'https://cattleinternationalseries.weebly.com/uploads/1/6/5/8/16581252/corriente-bull-charlie-copy-22.jpg?488',
        alt: 'Corriente',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/corriente'
      });
  };

  exports.getDexter = (req, res, next) => {
    res.render('cattlePages/dexter', {
        pageTitle: 'Dexter',
        imageURL: 'https://dextercattle.org/wp-content/uploads/2019/11/Applejack-Spartan-Charles.jpg',
        alt: 'Dexter',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/dexter'
      });
  };

  exports.getGelbvieh = (req, res, next) => {
    res.render('cattlePages/gelbvieh', {
        pageTitle: 'Gelbvieh',
        imageURL: 'http://knowledgebase.lookseek.com/images/animals/farmanimals/cattle/Gelbvieh-Cow.jpg',
        alt: 'Gelbvieh',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/gelbvieh'
      });
  };

  exports.getHereford = (req, res, next) => {
    res.render('cattlePages/hereford', {
        pageTitle: 'Hereford',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/herefordbull.jpg',
        alt: 'Hereford',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/hereford'
      });
  };

  exports.getHighland = (req, res, next) => {
    res.render('cattlePages/highland', {
        pageTitle: 'Highland',
        imageURL: 'https://cdn.iamcountryside.com/wp-content/uploads/2019/02/GettyImages-845355220.jpg',
        alt: 'Highland',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/highland'
      });
  };

  exports.getLimousin = (req, res, next) => {
    res.render('cattlePages/limousin', {
        pageTitle: 'Limousin',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSql9XoNB_L-CvIOwAw07emA9QLBwAKpoEqQY9QvO2Eb4eHgUce2X8soV9I-MokWe1MXXo&usqp=CAU',
        alt: 'Limousin',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/limousin'
      });
  };

  exports.getLincolnRed = (req, res, next) => {
    res.render('cattlePages/lincoln-red', {
        pageTitle: 'Lincoln-Red',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/lincolnredbull.jpg',
        alt: 'Lincoln-Red',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/lincoln-red'
      });
  };

  exports.getLowline = (req, res, next) => {
    res.render('cattlePages/lowline', {
        pageTitle: 'Lowline',
        imageURL: 'https://www.crosscreekcattle.com/images/Olympus_2014.jpg',
        alt: 'Lowline',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/lowline'
      });
  };

  exports.getMarchigiana = (req, res, next) => {
    res.render('cattlePages/marchigiana', {
        pageTitle: 'Marchigiana',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Marchigianabull.jpg',
        alt: 'Marchigiana',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/marchigiana'
      });
  };

  exports.getMiniatureHereford = (req, res, next) => {
    res.render('cattlePages/miniature-hereford', {
        pageTitle: 'Miniature-Hereford',
        imageURL: 'https://www.lazyriverminiatureherefords.com/uploads/1/0/8/0/108095775/published/charlie1.jpeg?1524414305',
        alt: 'Miniature-Hereford',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/miniature-hereford'
      });
  };

  exports.getMurrayGray = (req, res, next) => {
    res.render('cattlePages/murray-gray', {
        pageTitle: 'Murray-Gray',
        imageURL: 'https://www.sustainablegenetics.com/wp-content/uploads/2020/03/yankee.png',
        alt: 'Murray-Gray',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/murray-gray'
      });
  };

  exports.getNelore = (req, res, next) => {
    res.render('cattlePages/nelore', {
        pageTitle: 'Nelore',
        imageURL: 'https://pbs.twimg.com/media/CrRnQl9UEAA7lyl.jpg',
        alt: 'Nelore',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/nelore'
      });
  };

  exports.getParthenais = (req, res, next) => {
    res.render('cattlePages/parthenais', {
        pageTitle: 'Parthenais',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQke93IfJ9jkZ5tEIYsYUfMcE6yt7RzKQLUtzML1TIWhwB6yAsOgs-Ast5TpZ_0JdinfbQ&usqp=CAU',
        alt: 'Parthenais',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/parthenais'
      });
  };

  exports.getPinzgauer = (req, res, next) => {
    res.render('cattlePages/pinzgauer', {
        pageTitle: 'Pinzgauer',
        imageURL: 'https://www.texascirclep.com/photos/herd%20sires/2011/DSC03764.jpg',
        alt: 'Pinzgauer',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/pinzgauer'
      });
  };

  exports.getRedAngus = (req, res, next) => {
    res.render('cattlePages/red-angus', {
        pageTitle: 'Red-Angus',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/rangusbull1.jpg',
        alt: 'Red-Angus',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/red-angus'
      });
  };

  exports.getRedPoll = (req, res, next) => {
    res.render('cattlePages/red-poll', {
        pageTitle: 'Red-Poll',
        imageURL: 'https://i.pinimg.com/originals/ce/27/39/ce273967f91ee078381b3bb33802d58c.jpg',
        alt: 'Red-Poll',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/red-poll'
      });
  };

  exports.getRomagnola = (req, res, next) => {
    res.render('cattlePages/romagnola', {
        pageTitle: 'Romagnola',
        imageURL: 'https://cattleinternationalseries.weebly.com/uploads/1/6/5/8/16581252/1358506945.jpg',
        alt: 'Romagnola',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/romagnola'
      });
  };

  exports.getSantaGertrudis = (req, res, next) => {
    res.render('cattlePages/santa-gertrudis', {
        pageTitle: 'Santa-Gertrudis',
        imageURL: 'https://petkeen.com/wp-content/uploads/2021/12/Santa-Gertrudis_Celso-Margraf_Shutterstoock.jpg',
        alt: 'Santa-Gertrudis',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/santa-gertrudis'
      });
  };

  exports.getSenepol = (req, res, next) => {
    res.render('cattlePages/senepol', {
        pageTitle: 'Senepol',
        imageURL: 'https://www.bovine-elite.com/wp-content/uploads/2020/07/WC-112N-e1595512703400.jpg',
        alt: 'Senepol',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/senepol'
      });
  };

  exports.getSimbrah = (req, res, next) => {
    res.render('cattlePages/simbrah', {
        pageTitle: 'Simbrah',
        imageURL: 'data:image/jpeg;base64,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',
        alt: 'Simbrah',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/simbrah'
      });
  };

  exports.getSouthDevon = (req, res, next) => {
    res.render('cattlePages/south-devon', {
        pageTitle: 'South-Devon',
        imageURL: 'https://www.cfgphoto.com/data/media/435/CFG9127.jpg',
        alt: 'South-Devon',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/south-devon'
      });
  };

  exports.getSussex = (req, res, next) => {
    res.render('cattlePages/sussex', {
        pageTitle: 'Sussex',
        imageURL: 'https://neweralive.na/storage/uploads/2020/11/sussex-2.jpg',
        alt: 'Sussex',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/sussex'
      });
  };

  exports.getTarentaise = (req, res, next) => {
    res.render('cattlePages/tarentaise', {
        pageTitle: 'Tarentaise',
        imageURL: 'https://cattleinternationalseries.weebly.com/uploads/1/6/5/8/16581252/1828199.jpg?361',
        alt: 'Tarentaise',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/tarentaise'
      });
  };

  exports.getTexasLonghorn = (req, res, next) => {
    res.render('cattlePages/texas-longhorn', {
        pageTitle: 'Texas-Longhorn',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Texas%20Longhorn1.jpg',
        alt: 'Texas-Longhorn',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/texas-longhorn'
      });
  };

  exports.getWagyu = (req, res, next) => {
    res.render('cattlePages/wagyu', {
        pageTitle: 'Wagyu',
        imageURL: 'data:image/jpeg;base64,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',
        alt: 'Wagyu',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/wagyu'
      });
  };

  exports.getWatusi = (req, res, next) => {
    res.render('cattlePages/watusi', {
        pageTitle: 'Watusi',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/watusibull.jpg',
        alt: 'Watusi',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/watusi'
      });
  };

  exports.getZebu = (req, res, next) => {
    res.render('cattlePages/zebu', {
        pageTitle: 'Zebu',
        imageURL: 'https://i.pinimg.com/originals/a6/88/43/a688437ff2e171da47071a53ec1620a7.png',
        alt: 'Zebu',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/zebu'
      });
  };

  exports.getAyrshire = (req, res, next) => {
    res.render('cattlePages/ayrshire', {
        pageTitle: 'Ayrshire',
        imageURL: 'https://i.ytimg.com/vi/ntQnfak-8cM/hqdefault.jpg',
        alt: 'Ayrshire',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/ayrshire'
      });
  };

  exports.getBrownSwiss = (req, res, next) => {
    res.render('cattlePages/brown-swiss', {
        pageTitle: 'Brown-Swiss',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/brown1.jpg',
        alt: 'Brown-Swiss',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general1: 'TDB',
        general2: '',
        general3: '',
        general4: '',
        general5: '',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/brown-swiss'
      });
  };

  exports.getDairyShorthorn = (req, res, next) => {
    res.render('cattlePages/dairy-shorthorn', {
        pageTitle: 'Dairy-Shorthorn',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Dairy%20Shorthorn%20Cow.jpg',
        alt: 'Dairy-Shorthorn',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/dairy-shorthorn'
      });
  };

  exports.getDutchBelted = (req, res, next) => {
    res.render('cattlePages/dutch-belted', {
        pageTitle: 'Dutch-Belted',
        imageURL: 'https://alchetron.com/cdn/dutch-belted-c6eaa5cb-ab94-40a8-bfb7-bcde10de71a-resize-750.jpeg',
        alt: 'Dutch-Belted',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/dutch-belted'
      });
  };

  exports.getFriesian = (req, res, next) => {
    res.render('cattlePages/friesian', {
        pageTitle: 'Friesian',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/friesiancow.jpg',
        alt: 'Friesian',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/friesian'
      });
  };

  exports.getGuernsey = (req, res, next) => {
    res.render('cattlePages/guernsey', {
        pageTitle: 'Guernsey',
        imageURL: 'data:image/jpeg;base64,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',
        alt: 'Guernsey',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/guernsey'
      });
  };

  exports.getHolstein = (req, res, next) => {
    res.render('cattlePages/holstein', {
        pageTitle: 'Holstein',
        imageURL: 'data:image/jpeg;base64,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',
        alt: 'Holstein',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/holstein'
      });
  };

  exports.getJersey = (req, res, next) => {
    res.render('cattlePages/jersey', {
        pageTitle: 'Jersey',
        imageURL: 'https://bellvalefarms.com/wp-content/uploads/2021/03/funky.jpg',
        alt: 'Jersey',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/jersey'
      });
  };

  exports.getMilkingDevon = (req, res, next) => {
    res.render('cattlePages/milking-devon', {
        pageTitle: 'Milking-Devon',
        imageURL: 'https://www.thecattlesite.com/breeds/contents/Milking%20Devon%20Cow.jpg',
        alt: 'Milking-Devon',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/milking-devon'
      });
  };

  exports.getMontbeliarde = (req, res, next) => {
    res.render('cattlePages/montbeliarde', {
        pageTitle: 'Montbeliarde',
        imageURL: 'https://i.pinimg.com/736x/3d/7a/51/3d7a514e90e895821e44ebddcb24f9ef--dairy-cattle-farm-life.jpg',
        alt: 'Montbeliarde',
        maleHeight: 'TDB',
        maleWeight: 'TDB',
        femaleHeight: 'TDB',
        femaleWeight: 'TDB',
        general: 'TDB',
        special: 'TDB',
        pattern1: 'TDB',
        pattern2: '',
        pattern3: '',
        pattern4: '',
        pattern5: '',
        path: 'cattlePages/montbeliarde'
      });
  };

  exports.getMilk = (req, res, next) => {
    res.render('milk', {
        pageTitle: 'Milk Cattle',
        path: '/milk'
      });
  };

  exports.getWork = (req, res, next) => {
    res.render('work', {
        pageTitle: 'Working Cattle',
        path: '/work'
      });
  };
  
  exports.getSports = (req, res, next) => {
    res.render('sports', {
        pageTitle: 'Sports Cattle',
        path: '/sports'
      });
  };

  exports.getHide = (req, res, next) => {
    res.render('hide', {
        pageTitle: 'Hide Cattle',
        path: '/hide'
      });
  };

  exports.getAll = (req, res, next) => {
    res.render('all', {
        pageTitle: 'All Cattle',
        path: '/all'
      });
  };