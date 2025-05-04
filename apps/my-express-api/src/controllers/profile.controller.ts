import { Request, Response } from 'express';
import { prisma } from '@monots/mytslib';

export const getProfiles = async (req: Request, res: Response) => {
    const profiles = await prisma.profile.findMany();
    res.status(200).json(profiles);
};

export const createProfile = async (req: Request, res: Response) => {
    const { name, email, phone } = req.body;
    const profile = await prisma.profile.create({ data: { name, email, phone } });
    res.status(201).json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
    const { id, name, email, phone } = req.body;
    const profile = await prisma.profile.update({ where: { id }, data: { name, email, phone } });
    res.status(200).json(profile);
};

export const deleteProfile = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.profile.delete({ where: { id } });
    res.status(204).send();
};

