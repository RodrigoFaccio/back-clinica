-- CreateTable
CREATE TABLE "LOGIN" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "LOGIN_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PATIENTS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PATIENTS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CATEGORIES" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CATEGORIES_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QUESTIONS" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "QUESTIONS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LOGIN_username_key" ON "LOGIN"("username");

-- AddForeignKey
ALTER TABLE "QUESTIONS" ADD CONSTRAINT "QUESTIONS_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CATEGORIES"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
