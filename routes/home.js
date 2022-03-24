const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');

const router = express.Router();


router.get('/', homeController.getHome);

router.get('/meat', homeController.getMeat);

router.get('/milk', homeController.getMilk);

router.get('/hide', homeController.getHide);

router.get('/sports', homeController.getSports);

router.get('/work', homeController.getWork);

router.get('/all', homeController.getAll);

router.get('/aberdeen-angus', homeController.getAberdeen);

router.get('/aubrac', homeController.getAubrac);

router.get('/barzona', homeController.getBarzona);

router.get('/beefalo', homeController.getBeefalo);

router.get('/beef-master', homeController.getBeefMaster);

router.get('/beef-shorthorn', homeController.getBeefShorthorn);

router.get('/belgian-blue', homeController.getBelgianBlue);

router.get('/belted-galloway', homeController.getBeltedGalloway);

router.get('/blonde-d-aquitaine', homeController.getBlondeDAquitaine);

router.get('/braford', homeController.getBraford);

router.get('/brahman', homeController.getBrahman);

router.get('/brahmousine', homeController.getBrahmousine);

router.get('/brangus', homeController.getBrangus);

router.get('/buelingo', homeController.getBuelingo);

router.get('/charolais', homeController.getCharolais);

router.get('/chianina', homeController.getChianina);

router.get('/composite', homeController.getComposite);

router.get('/corriente', homeController.getCorriente);

router.get('/dexter', homeController.getDexter);

router.get('/gelbvieh', homeController.getGelbvieh);

router.get('/hereford', homeController.getHereford);

router.get('/highland', homeController.getAubrac);

router.get('/limousin', homeController.getLimousin);

router.get('/lincoln-red', homeController.getLincolnRed);

router.get('/lowline', homeController.getLowline);

router.get('/marchigiana', homeController.getMarchigiana);

router.get('/miniature-herefor', homeController.getMiniatureHereford);

router.get('/murray-gray', homeController.getMurrayGray);

router.get('/nelore', homeController.getNelore);

router.get('/parthenais', homeController.getParthenais);

router.get('/Pinzgauer', homeController.getPinzgauer);

router.get('/red-angus', homeController.getRedAngus);

router.get('/red-poll', homeController.getRedPoll);

router.get('/romagnola', homeController.getRomagnola);

router.get('/santa-gertrudi', homeController.getSantaGertrudis);

router.get('/senepol', homeController.getSenepol);

router.get('/simbrah', homeController.getSimbrah);

router.get('/south-devon', homeController.getSouthDevon);

router.get('/sussex', homeController.getSussex);

router.get('/tarentaise', homeController.getTarentaise);

router.get('/texas-longhorn', homeController.getTexasLonghorn);

router.get('/wagyu', homeController.getWagyu);

router.get('/watusi', homeController.getWatusi);

router.get('/zebu', homeController.getZebu);

router.get('/ayrshire', homeController.getAyrshire);

router.get('/brown-swiss', homeController.getBrownSwiss);

router.get('/dairy-shorthorn', homeController.getDairyShorthorn);

router.get('/dutch-belted', homeController.getDutchBelted);

router.get('/friesian', homeController.getFriesian);

router.get('/guernsey', homeController.getGuernsey);

router.get('/holstein', homeController.getHolstein);

router.get('/jersey', homeController.getJersey);

router.get('/milking-devon', homeController.getMilkingDevon);

router.get('/montbeliarde', homeController.getMontbeliarde);



module.exports = router;