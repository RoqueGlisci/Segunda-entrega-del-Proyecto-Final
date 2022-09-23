export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: { //Cambiar por la config personal
        "type": "service_account",
            "project_id": "codereje1",
            "private_key_id": "9a6a0bf31633cceb7c720426f7601a0ddbb031ae",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCx5snOoRAe4o8F\nPXQq4Tcl2YJhKYZBKEyeJshPP1BllFO5Hp4FKE7/5ZEFGvUizAKjkXpDnefOneqd\nzHlv0phT8Zxg+FN3DOmpCKdXkZ9niTYqeb9egeAp5tFBkBeHAYiKWCH6FCOWLIqm\ntUmIF09EjExovi5vg2Wx7c9gqebDFo4DHId48KapARI2nf9Nu/q07/VGN++v1lPy\nRQEVg6LbwDFU0KK6bU1Vdig0H+u+mW4VUTnSHY3MdjGw+zzazJFVk2C1OVswanh3\nZq+U7+Wm4lECdR4oHA3PdCVQ/onuky6fosekCDei6ty+sN9lsXA1r/lVCiQahu+q\nRU9ZqsjlAgMBAAECggEAJlrVIJTuBlKfNiiBLqt+uczSxMLwnISlPCWtYxSJ71SS\n1mMI+6Cso5Qpd3nP5xAn837uZryZGR1H03ydo+O6DsMVDX0MdarVh6mDdqhBP0/A\nW1kDTsteeno2nFWGFQfaGcWVkbac04hH3lhQgaRQ5T0ATkbOeSFRoBJe9v66b03F\nVS9ymTfPrXEB/o5ZmuW/FPpSlHXt3Mrova4DHt4Tl7mzq7fe4S76DHtIOfH+myGj\n458zrXOktKRbukiNbpCSAMup17M58y3hlebmi6aJ/6tNNQkVSwiLk5B0N1aoJPTq\nBYRuzhFSb83gZIwQP3admHusJCwGnMR3HKhSTdutEQKBgQDxs6eeYY6QJCCHha1s\n1UQjYpDm/vOEfbLgRMmEzArSTRc1IvIBA041jFTtkcmyK2kwFZxTgw9AWeqkjjsI\ncKt2ikKGZU5d0oRo7TIhL8AIP/lAzCh+4qByODVxLXW1lbfRHPozUApv0iw4NSd/\n869N2ZIy4xE3b7YnXcBogfWJaQKBgQC8bPBYGRsjqL9lVJgwZIgl1SP9WdaSX01S\nfiKXsV3h/+JLbUKWbT9WxilXmdOMCYy3eeJxdAUkFnDEGoLTYX75MlLJ9oo8eVLR\nqU4oeIkcrP6y1+O6+yEGNHSQUrLBT9w1ShXjpjMzpKO3M0brVbp52bcf7KNY8eQ8\nAhBd3cl4HQKBgQCSnCAbkR+RzWgx7GMy9fYb5KjyhUmfX0PGh9MZC0+xGvPt1mGn\nPaMOFi5Z4KnQukZW1XT6ry/sH96VrHSgfP90qw8JSKANhymsH9zdhoJcPrnplS0n\nMj6Sqge4vBN/bu6OGJ6ny3BZPcp22b84/M6kUUo+Nb/2uXtrS5Hvko0mqQKBgQC3\nkFGdIehElxLOvtj83BOe98P1/12Af4Ouh99fdJWHpGdrH+gs8AUynh6Mjvl+hZcm\n74DhEiwn+gyln0Ywc9zlHFd3Fc2aGH/MbWoNF1BMNWR0Csp60Ehd6SBdsZMfrJNU\n/vXQL4vWFeDAix3eCkh+iNFUMo74Cb9VjpUvPPAXKQKBgQDPPS/mFWs7RT2R753d\nUv+2yWv29rK1+O7+VBVUehFIYbphNj0OvUFCC4nm+ExeeQeJP1WEuBhXvgRSfbj7\npHqF2W/5yrnglkGKIGMAWl8L66AOC+ZlSbPNq2u7NT5Ii7ET6gAqLA4wGFmSnbwK\njwEEN41tExWrPvfuq2vqDyOM+g==\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-phbeu@codereje1.iam.gserviceaccount.com",
            "client_id": "116689915622849077921",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-phbeu%40codereje1.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
