# TDraw

## Building

To be able to run the development server. **Python 3** must be installed on your system.

To run the development server, follow the commands:

-   Change directory to **tdraw**

```sh
cd tdraw
```

-   Create python virtual environment

```sh
python -m venv env
```

-   Activate virtual environment

```sh
source env/bin/activate
```

-   Install necessary dependencies

```sh
pip install -r requirements.txt
```

-   Start the development server

```sh
export FLASK_APP=application
export FLASK_ENV=developement
export FLASK_DEBUG=True
flask run
```

## License

The software is licensed under MIT (see [LICENSE](./LICENSE)) and uses third
party libraries and some other materials that are distributed under their own
terms (see [LICENSE-3RD-PARTY](./LICENSE-3RD-PARTY)).
