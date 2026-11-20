CREATE TABLE IF NOT EXISTS consultas_por_dia (
  dia TEXT PRIMARY KEY NOT NULL,
  cantidad INTEGER NOT NULL DEFAULT 0 CHECK (cantidad >= 0)
);
