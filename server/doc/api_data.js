define({ "api": [  {    "type": "get",    "url": "/",    "title": "Flagz Root",    "name": "Root",    "description": "<p>The rocking flagz api</p>",    "group": "API",    "version": "0.0.0",    "filename": "server/src/router/index.js",    "groupTitle": "API"  },  {    "type": "post",    "url": "/posts",    "title": "Create",    "description": "<p>create a message</p>",    "name": "Post_creation",    "group": "Post",    "permission": [      {        "name": "Authentified"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>message</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/src/router/routes/posts.js",    "groupTitle": "Post"  }] });
