-- CreateEnum
CREATE TYPE "USER_STATUS" AS ENUM ('ACTIVE', 'CONFIRMATION_PENDING', 'BLOCKED');

-- CreateTable
CREATE TABLE "tb_Users" (
    "id" TEXT NOT NULL,
    "fistName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "status" "USER_STATUS" NOT NULL DEFAULT 'CONFIRMATION_PENDING',
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tb_Users_email_idx" ON "tb_Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_Users_email_key" ON "tb_Users"("email");
