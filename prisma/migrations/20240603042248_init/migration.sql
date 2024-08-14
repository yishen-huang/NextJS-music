-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "music" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "singer" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "coverImgUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "musicList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_musicTomusicList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_musicTomusicList_A_fkey" FOREIGN KEY ("A") REFERENCES "music" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_musicTomusicList_B_fkey" FOREIGN KEY ("B") REFERENCES "musicList" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_musicTomusicList_AB_unique" ON "_musicTomusicList"("A", "B");

-- CreateIndex
CREATE INDEX "_musicTomusicList_B_index" ON "_musicTomusicList"("B");
