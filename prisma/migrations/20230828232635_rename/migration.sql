/*
  Warnings:

  - You are about to drop the `CATEGORIES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LOGIN` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PATIENTS` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QUESTIONS" DROP CONSTRAINT "QUESTIONS_category_id_fkey";

-- DropTable
DROP TABLE "CATEGORIES";

-- DropTable
DROP TABLE "LOGIN";

-- DropTable
DROP TABLE "PATIENTS";

-- CreateTable
CREATE TABLE "login" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "login_username_key" ON "login"("username");

-- AddForeignKey
ALTER TABLE "QUESTIONS" ADD CONSTRAINT "QUESTIONS_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
