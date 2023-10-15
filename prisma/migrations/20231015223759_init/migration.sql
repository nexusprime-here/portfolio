-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "techs" TEXT NOT NULL DEFAULT '[]',
    "repository" TEXT NOT NULL,
    "view" TEXT
);
