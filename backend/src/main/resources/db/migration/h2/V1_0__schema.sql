
CREATE TABLE entries (
  entry_id BIGINT    IDENTITY PRIMARY KEY,
  title    VARCHAR(255) NOT NULL,
  created  TIMESTAMP    NOT NULL,
  finished TIMESTAMP DEFAULT NULL,
  state    VARCHAR(30)  NOT NULL,
  user_id  VARCHAR(60)  NOT NULL,
);

CREATE TABLE etches (
  etch_id     BIGINT IDENTITY PRIMARY KEY,
  timestamp   TIMESTAMP    NOT NULL,
  position    INT          NOT NULL,
  content     VARCHAR(MAX) NOT NULL,
  entry_id    BIGINT       NOT NULL,
  content_key VARCHAR(255) NOT NULL,
  content_iv  VARCHAR(255) NOT NULL,
  key_iv      VARCHAR(255) NOT NULL,
  iv_iv       VARCHAR(255) NOT NULL,
  FOREIGN KEY (entry_id) REFERENCES entries (entry_id)
);

