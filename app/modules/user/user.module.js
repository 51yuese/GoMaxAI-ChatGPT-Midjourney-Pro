'use strict';const _0x16f400=_0x1ca4;function _0xe751(){const _0x40dd60=['1140020IvvrJG','135270jkHiad','VerificationService','8sSPXwe','UserModule','ConfigEntity','object','6SwxjCq','./user.controller','@nestjs/typeorm','length','./user.entity','MailerService','__esModule','26328IerlgF','1048475ZYhOsW','decorate','__decorate','./user.service','120033lTXBFa','@nestjs/common','27jgjeth','VerifycationEntity','Global','forFeature','1251296doQOyL','336400doGWkr','RedisCacheService','UserInitVipEntity','./user_init_vip.entity','Module','UserService'];_0xe751=function(){return _0x40dd60;};return _0xe751();}(function(_0x3109fe,_0x41a148){const _0x2a2d3c=_0x1ca4,_0x1b92e4=_0x3109fe();while(!![]){try{const _0x3a4f9b=parseInt(_0x2a2d3c(0x16d))/0x1+parseInt(_0x2a2d3c(0x161))/0x2*(-parseInt(_0x2a2d3c(0x168))/0x3)+-parseInt(_0x2a2d3c(0x16c))/0x4+-parseInt(_0x2a2d3c(0x162))/0x5*(-parseInt(_0x2a2d3c(0x15a))/0x6)+parseInt(_0x2a2d3c(0x173))/0x7+-parseInt(_0x2a2d3c(0x156))/0x8*(parseInt(_0x2a2d3c(0x166))/0x9)+parseInt(_0x2a2d3c(0x174))/0xa;if(_0x3a4f9b===_0x41a148)break;else _0x1b92e4['push'](_0x1b92e4['shift']());}catch(_0x4b9c7f){_0x1b92e4['push'](_0x1b92e4['shift']());}}}(_0xe751,0x43d55));var __decorate=this&&this[_0x16f400(0x164)]||function(_0x571cf0,_0x4c0c78,_0x5641e9,_0x5bbf8a){const _0x2b90e2=_0x16f400;var _0x317104=arguments[_0x2b90e2(0x15d)],_0x55bdc8=_0x317104<0x3?_0x4c0c78:_0x5bbf8a===null?_0x5bbf8a=Object['getOwnPropertyDescriptor'](_0x4c0c78,_0x5641e9):_0x5bbf8a,_0x4d0d7b;if(typeof Reflect===_0x2b90e2(0x159)&&typeof Reflect[_0x2b90e2(0x163)]==='function')_0x55bdc8=Reflect[_0x2b90e2(0x163)](_0x571cf0,_0x4c0c78,_0x5641e9,_0x5bbf8a);else{for(var _0x18c129=_0x571cf0[_0x2b90e2(0x15d)]-0x1;_0x18c129>=0x0;_0x18c129--)if(_0x4d0d7b=_0x571cf0[_0x18c129])_0x55bdc8=(_0x317104<0x3?_0x4d0d7b(_0x55bdc8):_0x317104>0x3?_0x4d0d7b(_0x4c0c78,_0x5641e9,_0x55bdc8):_0x4d0d7b(_0x4c0c78,_0x5641e9))||_0x55bdc8;}return _0x317104>0x3&&_0x55bdc8&&Object['defineProperty'](_0x4c0c78,_0x5641e9,_0x55bdc8),_0x55bdc8;};Object['defineProperty'](exports,_0x16f400(0x160),{'value':!![]}),exports[_0x16f400(0x157)]=void 0x0;const verifycation_entity_1=require('./../verification/verifycation.entity'),verification_service_1=require('./../verification/verification.service'),common_1=require(_0x16f400(0x167)),typeorm_1=require(_0x16f400(0x15c)),user_controller_1=require(_0x16f400(0x15b)),user_service_1=require(_0x16f400(0x165)),user_entity_1=require(_0x16f400(0x15e)),config_entity_1=require('../globalConfig/config.entity'),mailer_service_1=require('../mailer/mailer.service'),redisCache_service_1=require('../redisCache/redisCache.service'),user_init_vip_entity_1=require(_0x16f400(0x170));let UserModule=class UserModule{};function _0x1ca4(_0x60bc41,_0xb87d9f){const _0xe75139=_0xe751();return _0x1ca4=function(_0x1ca41d,_0x5684d1){_0x1ca41d=_0x1ca41d-0x155;let _0x56c915=_0xe75139[_0x1ca41d];return _0x56c915;},_0x1ca4(_0x60bc41,_0xb87d9f);}UserModule=__decorate([(0x0,common_1[_0x16f400(0x16a)])(),(0x0,common_1[_0x16f400(0x171)])({'imports':[typeorm_1['TypeOrmModule'][_0x16f400(0x16b)]([user_entity_1['UserEntity'],user_init_vip_entity_1[_0x16f400(0x16f)],config_entity_1[_0x16f400(0x158)],verifycation_entity_1[_0x16f400(0x169)]])],'controllers':[user_controller_1['UserController']],'providers':[user_service_1[_0x16f400(0x172)],mailer_service_1[_0x16f400(0x15f)],verification_service_1[_0x16f400(0x155)],redisCache_service_1[_0x16f400(0x16e)]],'exports':[user_service_1[_0x16f400(0x172)]]})],UserModule),exports[_0x16f400(0x157)]=UserModule;